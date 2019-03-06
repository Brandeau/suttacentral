import hashlib
import pathlib
import subprocess

from tempfile import TemporaryDirectory
from flask import send_file, request, current_app
from flask_restful import Resource

from .make_html import get_html_data
from .cover import make_cover_png
from .common import export_dir

from common.font_subsetter import subset_files_by_names
from common.extensions import make_cache_key, cache

from ebooklib import epub

HERE = pathlib.Path(__file__).parent


def create_epub(data, language, filename, debug=False):
    introduction_page = f'''<html><body>
    <h1>{data['root_title']}{': ' + data['title'] if len(language) != 3 else ''}</h1>
    <p><i>{data['author_blurb']}</i></p>
    { f"<p>{data['blurb']}</p>" if data['blurb'] else "" }
    <p><em>This EBook was automatically generated by suttacentral.net</em></p>
    </body></html>
    '''

    stylesheet = '''
        @font-face {
            font-family: "Skolar PE";
            font-weight: normal;
            font-style: normal;
            src: url(../fonts/RaloksPE-Regular.woff) format("woff");
        }
        @font-face {
            font-family: "Skolar PE";
            font-weight: normal;
            font-style: italic;
            src: url(../fonts/RaloksPE-Italic.woff) format("woff");
        }
        @font-face {
            font-family: "Skolar PE";
            font-weight: bold;
            font-style: normal;
            src: url(../fonts/RaloksPE-Bold.woff) format("woff");
        }
        body {
            font-family: "Skolar PE", serif;
            line-height: 1.4;
        }
        body * {
            line-height: inherit;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            adobe-hyphenate: none;
            -webkit-hyphens: none;
            -moz-hyphens: none;
            -ms-hyphens: none;
            -epub-hyphens: none;
            hyphens: none;
            page-break-after: avoid;
            page-break-inside: avoid;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        li,
        p,
        blockquote p {
            text-align: left;
        }
        * {
            -webkit-hyphenate-limit-before: 3;
            -webkit-hyphenate-limit-after: 2;
            -ms-hyphenate-limit-chars: 6 3 2;
            hyphenate-limit-chars: 6 3 2;
            -webkit-hyphenate-limit-lines: 2;
            hyphenate-limit-lines: 2;
        }
        body {
            font-kerning: normal;
            font-variant: common-ligatures oldstyle-nums proportional-nums;
            font-feature-settings: "kern", "liga", "clig", "onum", "pnum";
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-variant: common-ligatures lining-nums proportional-nums;
            font-feature-settings: "kern", "liga", "clig", "lnum", "pnum";
            text-indent: 0;
        }
        h1,
        h2,
        h3 {
            font-weight: normal;
        }
        .hgroup p,
        .hgroup h1 {
            text-align: center;
            margin: 12px 0;
        }
        .hgroup {
            margin-bottom: 2em;
        }
        .gatha {
            margin-left: 2em;
        }
        ol,
        ul,
        li,
        dl,
        dt,
        dd {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            vertical-align: baseline;
        }
        li {
            margin: 1em 0 0 0em;
        }
        article,
        aside,
        figure,
        figcaption,
        footer,
        header,
        main,
        nav,
        section {
            display: block;
        }
        img {
            object-fit: contain;
        }
        p {
            text-indent: 1em;
            margin: 0;
            widows: 2;
            orphans: 2;
        }
        blockquote p {
            text-indent: 0;
            margin: 1em 0;
            widows: 2;
            orphans: 2;
        }
        p:first-of-type {
            text-indent: 0;
        }
        p.endsutta {
            text-indent: 0;
            margin: 1em 0 1em 0;
            text-align: center;
            font-style: italic;
        }
        a {
            color: #b37800
        }
    '''
    
    is_root = len(language) == 3

    
    author = data['author']
    if is_root:
        about = None
    else:
        about = f'A translation of {data["root_title"]} by'
    
    cover_data = make_cover_png(title=data['title'], author=author, about=about, debug=False)

    book = epub.EpubBook()

    book_id = f"SuttaCentral:{data['author']}:{data['title']}"
    
    book.set_identifier(book_id)
    book.set_title(data['title'])
    book.set_language('language')

    book.add_author(data['author'])

    

    font_dir = pathlib.Path('/tmp/font_dir')
    if not font_dir.exists():
        font_dir.mkdir()
    
    fonts = subset_files_by_names(names=['RaloksPE-Regular', 'RaloksPE-Italic', 'RaloksPE-Bold'], text=str(data), out_dir=font_dir)

    for name, font_file in fonts.items():
        font = epub.EpubItem(uid=name, file_name=f'fonts/{name}.woff', media_type='application/font-woff')
        book.add_item(font)

    style_sheet = epub.EpubItem(uid="style", file_name='style/fonts.css', media_type='text/css', content=stylesheet)
    book.add_item(style_sheet)

    book.set_cover('cover.png', cover_data)

    chapters = []

    #book.add_page(title=data['title'], content='<img src="../images/cover.png" alt="cover image">', uid='cover')
    intro_page = epub.EpubHtml(title='Introduction', file_name='intro.xhtml', lang='en', uid='intro')
    intro_page.set_content(introduction_page)
    book.add_item(intro_page)
    chapters.append(intro_page)
   
    for page in data['pages']:
        title = page['long_title'] if 'long_tile' in page else page['title']
        if not title:
            title = page['acronym']
        chapter = epub.EpubHtml(title=title, file_name=page['uid'] + '.xhtml', uid=page['uid'])
        chapter.set_content(page['html'])
        chapters.append(chapter)
        book.add_item(chapter)
    
    for chapter in chapters:
        chapter.add_item(style_sheet)

    book.toc = (epub.Link('intro.xhtml', 'Introduction', 'intro'),
        epub.Link('guide.xhtml', 'Guide', 'guide'),
        (epub.Section('Contents'),
        tuple(chapters[2:])
        )
    )

    

    book.spine = ['nav'] + chapters

    nav = epub.EpubNav()
    nav.add_item(style_sheet)
    book.add_item(epub.EpubNcx())
    book.add_item(nav)

    epub.write_epub(filename, book)

    with filename.open('rb') as f:
        file_hash = hashlib.md5(str(data).encode()).hexdigest()[:6]
    
    
    epub_file = filename.parent / f'{filename.stem}_{file_hash}.epub'
    filename.rename(epub_file)
    return epub_file


def generate_epub(uid, language, author):
    data = get_html_data(uid, language, author)
        
    filename = export_dir / f'{uid}_{language}_{author}.epub'
    
    epub_file = create_epub(data, language, filename, debug=False)
    
    result = {
        'uid': uid,
        'language': language,
        'author': author,
        'format': 'epub',
        'file': epub_file,
        'href': f'{current_app.config["SERVER_ADDRESS"]}/ebook/{epub_file.name}'
    }

    return result

_cache = {}
class EBook(Resource):
    def get(self, uid, language, author, **kwargs):
        cache_key = f'{uid}_{language}_{author}'
        if cache_key not in _cache:
            parts = author.split('.')
            ebook_format = parts[-1]
            author = '.'.join(parts[:-1])
            details = request.args.get('details') != None
            
            if ebook_format != 'epub':
                return 500, "Format not supported"           

            result = generate_epub(uid, language, author)
            _cache[cache_key] = result
        else:
            result = _cache[cache_key]
        if details:
            return result
        else:
            print(result['file'])
            return send_file(str(result['file']))

def epubcheck(filename):
    subprocess.run(['epubcheck', str(filename)])
