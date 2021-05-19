import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { layoutSimpleStyles } from '../styles/sc-layout-simple-styles';
import { typographyCommonStyles } from '../styles/sc-typography-common-styles';
import { typographyStaticStyles } from '../styles/sc-typography-static-styles';
import { SCStaticPage } from '../addons/sc-static-page';

class SCStaticDownloadsPage extends SCStaticPage {
  render() {
    return html`
      <style>
        ${layoutSimpleStyles}
        ${typographyCommonStyles}
        ${typographyStaticStyles}
      </style>
      <style>
        img {
          float: right;
          width: 50%;
        }
      </style>
      <main>
        <article>
          <h1>${this.localize('c20c35ef53bf1b70789ce94e66800147')}</h1>
          <h2>${this.localize('0f47776094370e032467a8ac23182881')}</h2>
          <p>${unsafeHTML(this.localize('38e4989cbe5b5596eef6db24cca413b5'))}</p>
          <ul>
            <li>
              <a href="/api/ebook/dn_en_sujato.epub" download target="_blank">
                <cite class="text-translated">Long Discourses</cite>
                (
                <cite class="text-root">Dīgha Nikāya</cite>
                ),
                <span class="author">Bhikkhu Sujato</span>
              </a>
            </li>
            <li>
              <a href="/api/ebook/mn_en_sujato.epub" download target="_blank">
                <cite class="text-translated">Middle Discourses</cite>
                (
                <cite class="text-root">Majjhima Nikāya</cite>
                ),
                <span class="author">Bhikkhu Sujato</span>
              </a>
            </li>
            <li>
              <a href="/api/ebook/sn_en_sujato.epub" download target="_blank">
                <cite class="text-translated">Linked Discourses</cite>
                (
                <cite class="text-root">Saṁyutta Nikāya</cite>
                ),
                <span class="author">Bhikkhu Sujato</span>
              </a>
            </li>
            <li>
              <a href="/api/ebook/an_en_sujato.epub" download target="_blank">
                <cite class="text-translated">Numbered Discourses</cite>
                (
                <cite class="text-root">Aṅguttara Nikāya</cite>
                ),
                <span class="author">Bhikkhu Sujato</span>
              </a>
            </li>
            <li>
              <a href="/api/ebook/thag_en_sujato.epub" download target="_blank">
                <cite class="text-translated">Verses of the Senior Monks</cite>
                (
                <cite class="text-root">Theragāthā</cite>
                ),
                <span class="author">Bhikkhu Sujato</span>
              </a>
            </li>
            <li>
              <a href="/api/ebook/thig_en_sujato.epub" download target="_blank">
                <cite class="text-translated">Verses of the Senior Nuns</cite>
                (
                <cite class="text-root">Therīgāthā</cite>
                ),
                <span class="author">Bhikkhu Sujato</span>
              </a>
            </li>
          </ul>
          <h2>${this.localize('c1c1e70d557e9ba9b036ef879a504ce6')}</h2>
          <p>${unsafeHTML(this.localize('b64911b8fd3c48b5da708fd28ac1e303'))}</p>
          <h2>${this.localize('62ff57d3bbb642c261331645599a1f56')}</h2>
          <p>${unsafeHTML(this.localize('27e0c05c3adc9f5c748340495571633c'))}</p>
          <p>${this.localize('ac389e41b6828374e621967357b6a4eb')}</p>
          <p>${this.localize('b98f1fe799bdd20776773c1b76145dbd')}</p>
          <table>
            <tr>
              <td>${unsafeHTML(this.localize('8baf6965c84e3c8c75a9e1fd8e292d1e'))}</td>
              <td>${unsafeHTML(this.localize('706ad432849394f0702d65b0bdecab4b'))}</td>
            </tr>
            <tr>
              <td>${unsafeHTML(this.localize('2ef270b548e325cba89c9a9ae3fd42cc'))}</td>
              <td>${this.localize('f455c862232872d2badece1044fad75f')}</td>
            </tr>
            <tr>
              <td>${unsafeHTML(this.localize('eac7b279bd5587dca87d58aeb756c0b2'))}</td>
              <td>${unsafeHTML(this.localize('a9f2623cf5b72eb09b1a2962e18955be'))}</td>
            </tr>
          </table>
          <h2>${this.localize('aa9d1327240db97befef1e39dd7a3377')}</h2>
          <p>${unsafeHTML(this.localize('eee6d23294bbce6a8fc67d3b5755ce6b'))}</p>
        </article>
      </main>
    `;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/static_downloads-page';
  }
}

customElements.define('sc-static-downloads', SCStaticDownloadsPage);
