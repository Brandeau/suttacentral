import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { layoutSimpleStyles } from '../styles/sc-layout-simple-styles.js';
import { typographyCommonStyles } from '../styles/sc-typography-common-styles.js';
import { typographyStaticStyles } from '../styles/sc-typography-static-styles.js';
import { SCStaticPage } from '../addons/sc-static-page.js';
import _ from '../../localization/macro.js';

class SCGeneralGuide extends SCStaticPage {
  render() {
    return html`
      <style>
        ${layoutSimpleStyles}
        ${typographyCommonStyles}
        ${typographyStaticStyles}
      </style>
      <div id="page-wrap">
        <main>
          <section>
            <article>
              <h1>${_`A Reader’s Guide to the Pali Suttas`}</h1>
              <p class="byline">${_`Bhikkhu Sujato, 2019`}</p>
              <nav class="contents">
                <ol>
                  <li>${_`<a href="#item1">About These Guides</a>`}</li>
                  <li>${_`<a href="#item2">An Approachable Translation</a>`}</li>
                  <li>${_`<a href="#item3">Plan Your Route or Wander in the Garden</a>`}</li>
                  <li>${_`<a href="#item4">Looking Up References</a>`}</li>
                  <li>${_`<a href="#item5">Elements of Structure</a>`}</li>
                  <li>${_`<a href="#item6">In the Buddha’s Day: A Time of Change</a>`}</li>
                  <li>${_`<a href="#item7">Economics and Politics</a>`}</li>
                  <li>${_`<a href="#item8">Social Life</a>`}</li>
                  <li>${_`<a href="#item9">The Many Spiritual Paths of Ancient India</a>`}</li>
                  <li>${_`<a href="#item10">Cosmology</a>`}</li>
                  <li>${_`<a href="#item11">On the Pali Commentaries</a>`}</li>
                  <li>${_`<a href="#item12">A Brief and Incomplete Textual History</a>`}</li>
                </ol>
              </nav>
              <p>
                ${_`The suttas of the Pali Canon (Tipiṭaka), especially the four main <i lang="pi">nikāyas</i>, are essential reading for anyone who wishes to understand the Buddha and his teaching. They have been preserved and passed down in the Pali language by the Theravāda tradition of Buddhism as the word of the Buddha.`}
              </p>
              <p>
                ${_`These texts were originally passed down orally, by generations of monks and nuns who memorized them and recited them together. Around 30 BCE they were written down in the Āluvihāra in Sri Lanka, and subsequently were transmitted in manuscripts of palm leaves.`}
              </p>
              <p>
                ${_`From the 19th century, the manuscripts were edited and published as modern editions in sets of books. In addition, the Pali text was translated into a number of modern languages, including Thai, Burmese, Sinhalese, and English.`}
              </p>
              <p>
                ${_`The word Tipiṭaka means “Three Baskets”. The Basket of Discourses is traditionally listed as the second of the three. The four <i lang="pi">nikāyas</i> make up the bulk of the Basket of Discourses. Here is how they are situated within the canon as a whole.`}
              </p>
              <ul>
                <li>${_`Vinaya Piṭaka (Basket of Monastic Law)`}</li>
                <li>
                  ${_`Sutta Piṭaka (Basket of Discourses)`}
                  <ul>
                    <li>${_`<b>Dīgha Nikāya</b> (Long Discourses)`}</li>
                    <li>${_`<b>Majjhima Nikāya</b> (Middle Discourses)`}</li>
                    <li>${_`<b>Saṁyutta Nikāya</b> (Linked Discourses)`}</li>
                    <li>${_`<b>Aṅguttara Nikāya</b> (Numbered Discourses)`}</li>
                    <li>${_`Khuddaka Nikāya (Minor Discourses)`}</li>
                  </ul>
                </li>
                <li>${_`Abhidhamma Piṭaka (Basket of Systematic Treatises)`}</li>
              </ul>
              <p>
                ${_`Similar collections are found in ancient Chinese translations, and substantial portions of them are also in Sanskrit and Tibetan. The diverse collections of scriptures arose among the Buddhist communities who spread across greater India in the centuries following the Buddha, especially under the Buddhist emperor, Ashoka. These missions are documented in the ancient chronicles of Sri Lanka as well as the Vinaya commentaries in Pali and Chinese, and have been partially corroborated by modern archaeology.`}
              </p>
              <p>
                ${_`SuttaCentral hosts almost all of these texts and provides comprehensive parallels showing the relations between them. A comparative understanding based on the full spectrum of these texts is essential for any study of early Buddhism. The Chinese Buddhist canon, in particular, contains a vast amount of translations of early texts, and in terms of quantity it outweighs the Pali texts by some margin.`}
              </p>
              <p>
                ${_`For many reasons, though, the Pali texts will always retain a special place for those who wish to understand what the Buddha taught.`}
              </p>
              <ul>
                <li>
                  ${_`They are the only complete set of scriptures of an early school of Buddhism.`}
                </li>
                <li>
                  ${_`They are by far the largest body of texts to survive in an early Indic dialect.`}
                </li>
                <li>
                  ${_`They are accompanied by an extensive and detailed set of ancient commentaries (<i lang="pi">aṭṭhakathā</i>).`}
                </li>
                <li>
                  ${_`They are, for the most part, linguistically clear, well-edited, and readily comprehensible.`}
                </li>
              </ul>
              <p>
                ${_`Moreover, the Pali texts are the core scriptures of a living tradition, the Theravāda school found in Sri Lanka, Thailand, Myanmar, Bangladesh, Cambodia, Laos, India, China, and Vietnam. To this day they are recited, taught, studied, and practiced daily, and are regarded in the traditions as being a reliable witness to the teachings of the Buddha himself.`}
              </p>
              <p>
                ${_`Among the Pali texts, it is the four <i lang="pi">nikāyas</i> that command the most attention. It is here that we find extensive and definitive explanations of Buddhist teachings, as well as the living personality of the Buddha and his immediate disciples.`}
              </p>
              <p>
                ${_`By comparison, the Vinaya Piṭaka details the life of the monastic communities, and in addition it reveals much about the history and social background; but it contains only a few teaching passages. The Abhidhamma Piṭaka is made up of systematic treatises that were composed in the centuries following the Buddha’s passing. And the books of the Khuddaka Nikāya are very mixed. There are six fairly short books that are supplements to the main four <i lang="pi">nikāyas</i>, mostly in verse: the <a href="dhp">Dhammapada</a>, <a href="ud">Udāna</a>, <a href="iti">Itivuttaka</a>, <a href="snp">Sutta Nipāta</a>, <a href="thag">Theragāthā</a>, and <a href="thig">Therīgāthā</a>. However, most of the other books in the Khuddaka are later, and represent a phase of Buddhism a few centuries after the Buddha.`}
              </p>
              <h2 id="item1">${_`About These Guides`}</h2>
              <p>
                ${_`I have prepared these guides in order to support a student who wishes to develop a deeper understanding of the <i lang="pi">nikāyas</i>. They accompany my translations of the four <i lang="pi">nikāyas</i> as found on SuttaCentral. This general guide is meant to be read first, as it covers a variety of issues that are common to all the <i lang="pi">nikāyas</i>. The four <i lang="pi">nikāyas</i> are a highly unified body of texts, sharing most of the significant doctrinal passages. The general information presented here is fleshed out in individual essays on each of the four <i lang="pi">nikāyas</i>, which highlight the shifts in emphasis and orientation from one collection to the next. These may be read in any order. While the guides for the specific <i lang="pi">nikāyas</i> naturally focus on the texts in that <i lang="pi">nikāya</i>, this is not adhered to rigidly, and they may refer also to passages found elsewhere.`}
              </p>
              <p>
                ${_`Summaries of major doctrinal themes may be found mostly in the <i lang="pi">nikāya</i> guides, especially that for the Saṁyutta Nikāya, rather than here. However, I would urge a degree of caution when it comes to summaries, including my own. The true joy of the suttas is in the undigested teachings, in that raw moment when the Buddha encounters a person in suffering and helps them, not by giving them a digested abstract, but by reaching out to them as people. Summaries and surveys are best treated as starting points for discovery, rather than as definitive treatises.`}
              </p>
              <p>
                ${_`I almost completely avoid sideways glances at the various Chinese and other parallels. Understanding these relations is critical, and the entire basis of SuttaCentral is founded on this fact. But the number of texts is very large, and the complexity of the subject is daunting. I fear that if I were to deal with parallels in any kind of depth, these essays would never be completed; and if they were, they would have become unreadably complex. Hence I have set myself a more manageable scope, sticking to the Pali texts, on the understanding that most things probably apply to the parallels as well. The reader can easily check the parallels on SuttaCentral if they wish.`}
              </p>
              <p>
                ${_`Among students of the suttas, the names of these collections are often abbreviated to “Dīgha”, “Majjhima”, and so on, just as the word “Sutta” is often omitted from sutta titles. Strictly speaking, it’d be best to use the Pali title when referring to the original text, and the translated title when referring to the translation; but this distinction is often overlooked.`}
              </p>
              <h2 id="item2">${_`An Approachable Translation`}</h2>
              <p>
                ${_`In 2015 I determined to create freely available translations of the main Pali discourses, so that all of these teachings might be made freely available in a clear, consistent, and accurate rendition. My aim was to translate the four main <i lang="pi">nikāyas</i> as well as the 6 early books of the Khuddaka Nikāya: Theragāthā, Therīgāthā, Udāna, Itivuttaka, Dhammapada, and Suttanipāta. I did this so that these astonishing works of ancient spiritual insight might enjoy the wider audience they so richly deserve.`}
              </p>
              <p>
                ${_`In considering my translation style, I reflected on the standard trope that introduces the prose suttas: a person “approaches” the Buddha to ask a question or hear a teaching. It’s one of those passages that became so standard that we usually just pass it by. But it is no small thing to “approach” a spiritual teacher. It takes time, effort, curiosity, and courage; many of those people would have been more than a little nervous.`}
              </p>
              <p>
                ${_`How, then, would the Buddha respond when approached? Would he have been archaic and obscure? Would he use words in odd, alienating ways? Would you need to have another monk by your side, whispering notes into your ear every second sentence—“He said this; but what he really meant was…”?`}
              </p>
              <p>
                ${_`I think not. I think that the Buddha would have spoken clearly, kindly, and with no more complication than was necessary. I think that he would have respected the effort that people made to “approach” his teachings, and he would have tried the best he could, given the limitations of language and comprehension, to explain the Dhamma so that people could understand it.`}
              </p>
              <p>
                ${_`An approachable translation expresses the meaning of the text in a manner that is simple, friendly, and idiomatic. It should not just be technically correct, it should sound like something someone might actually say.`}
              </p>
              <p>
                ${_`Which means that it should strive to dispense entirely with the formalisms, technicalities, and Indic idioms that has dominated Buddhist translations, into which English has been coerced by translators who were writing for Indologists, linguists, and Buddhist philosophers. Such translations are a death by a thousand papercuts; with each obscurity the reader is distanced, taken out of the text, pushed into a mode of acting on the text, rather than being drawn into it.`}
              </p>
              <p>
                ${_`That is not how those who listened to the Buddha would have experienced it. They were not being annoyed by the grit of dubious diction, nor were they being constantly nagged to check the footnotes. They were drawn inwards and upwards, fully experiencing the transformative power of the Dhamma as it came to life in the words of the Awakened One. We cannot hope to recapture this experience fully; but at least we can try to not make things worse than they need to be.`}
              </p>
              <p>
                ${_`At each step of the way I asked myself, “Would an ordinary person, with little or no understanding of Buddhism, be able to read this and understand what it is actually saying?” To this end, I have favored the simpler word over the more complex; the direct phrasing rather than the oblique; the active voice rather than the passive; the informal rather than the formal; and the explicit rather than the implicit.`}
              </p>
              <p>
                ${_`Still, it should not be thought that these are loose adaptations or simplifications. There is a place for re-imaginings of ancient texts, and for versions that strip the complexity to focus on the main point. But my work is intended as a full and accurate translation, one that omits nothing of substance. It is just that I try to express this without undue complexity.`}
              </p>
              <p>
                ${_`I still feel I am a long way from achieving my goal. No-one is more aware than the translator of the compromises and losses along the way. Consistency, clarity, correctness, and beauty all make their competing claims, and only rarely, it seems, can all be met. It is a work in progress, and I will probably be making corrections and adjustments for many years to come.`}
              </p>
              <p>
                ${_`I have been especially influenced in this approach by my fellow monks, Ajahn Brahm and Ajahn Brahmali. It is from Ajahn Brahm that I have learned the virtue of plain English; of the kindness of speaking such that people actually understand. And with Ajahn Brahmali, who has been working on Vinaya translations at the same time, I have had many illuminating discussions about the meaning of various words and phrases. He said one thing that stuck in my mind: a translation should mean <em>something</em>. Even if you’re not sure what the text means, we can be sure that it had some meaning, so to translate it based purely on lexical correspondences is to not really translate it at all. Say what you think the text means, and if you make a mistake, fix it.`}
              </p>
              <h2 id="item3">${_`Plan Your Route or Wander in the Garden`}</h2>
              <p>
                ${_`The Buddha’s teaching is a graduated one, leading from simple principles to profound realizations. This pattern is found within almost all of the discourses in one way or another. However it does <em>not</em> apply to the collections of discourses. From collection to collection or discourse to discourse there is no graduation in difficulty, no build up of assumed knowledge in the student.`}
              </p>
              <p>
                ${_`On the contrary, the Dīgha Nikāya begins with the Brahmajala Sutta, while the Majjhima Nikāya begins with the Mūlapariyāya Sutta, both of which are among the most profound and difficult discourses in the whole canon. A student who dives in unwarily will suddenly find themselves in very deep waters indeed.`}
              </p>
              <p>
                ${_`If we wish to build up knowledge step by step, we can’t rely on simply reading the suttas in order. Students often find it helpful to use a structured reading guide such as that offered here. On SuttaCentral, we offer several other approaches.`}
              </p>
              <p>
                ${_`Having said which, there’s nothing wrong with simply plunging in at random, so long as you don’t expect everything to make sense at first. Take your time and enjoy wandering about. Don’t worry too much about things that seem odd or unexpected. Usually you’ll find that obscure or difficult ideas are explained somewhere else; discovering those unexpected connections is one of the joys of reading the suttas.`}
              </p>
              <p>
                ${_`In these introductory essays, you will find many references to the suttas. You don’t need to look up each reference to understand the essays. But if you do, you will get a reasonable survey of many important texts, and learn how to find the passage that you need. I suggest reading each essay on its own first, and then a second time, looking up and reading the sutta references as you go.`}
              </p>
              <h2 id="item4">${_`Looking Up References`}</h2>
              <p>
                ${_`When you delve into sutta reading, you’ll notice that texts and passages are referenced in sometimes confusing ways. On SuttaCentral we employ a simple and widely adopted form of semantic referencing. By “semantic” references, we mean that the reference numbers are based on meaningful divisions in the texts themselves.`}
              </p>
              <p>${_`For the four <i lang="pi">nikāyas</i>, this means:`}</p>
              <ul>
                <li>
                  ${_`In the Dīgha and Majjhima, texts are referenced by the ID for the collection (DN and MN respectively) and the sutta number, counted in a simple sequence from the beginning.`}
                </li>
                <li>
                  ${_`In the Saṁyutta, the collection ID (SN), <i lang="pi">saṁyutta</i> (thematic group), and sutta.`}
                </li>
                <li>
                  ${_`In the Aṅguttara, the collection ID (AN), <i lang="pi">nipāta</i> (numerical group), and sutta.`}
                </li>
              </ul>
              <p>
                ${_`More granular referencing is provided by section numbers. These follow pre-existing conventions:`}
              </p>
              <ul>
                <li>
                  ${_`In the Dīgha, the section numbers of the PTS Pali edition, which have been widely adopted in translations.`}
                </li>
                <li>
                  ${_`In the Majjhima, the section numbers introduced by Bhikkhu Ñāṇamoḷi, and used in Bhikkhu Bodhi’s edition.`}
                </li>
                <li>
                  ${_`In the Saṁyutta and Aṅguttara, the paragraph numbers as found in the Mahāsaṅgīti Pali text.`}
                </li>
              </ul>
              <p>
                ${_`Each of these is further subdivided so that each section contains a number of “segments”, a short piece of text usually about a sentence or so long. In my translations, the segments are matched with the underlying Pali text.`}
              </p>
              <p>
                ${_`In our system, the numbers following a colon represent the section and segment numbers, that is, the subdivisions within a sutta. So, for example:`}
              </p>
              <ul>
                <li>
                  ${_`DN 3 means “the third discourse in the collection of Long Discourses (Dīgha Nikāya)”.`}
                </li>
                <li>
                  ${_`MN 43:3 means “discourse 43, section 3 in the collection of Middle Discourses (Majjhima Nikāya)”.`}
                </li>
                <li>
                  ${_`MN 43:3.7 means “discourse 43, section 3, segment 7 in the collection of Middle Discourses (Majjhima Nikāya)”.`}
                </li>
                <li>
                  ${_`SN 12.2:6.2 means “discourse 2, section 6, segment 2 in the 12th <i lang="pi">saṁyutta</i> of the collection of Linked Discourses (Saṁyutta Nikāya)”.`}
                </li>
              </ul>
              <p>
                ${_`You may encounter various other referencing systems. In academic works, texts are often referenced by volume and page of the Pali Text Society (PTS) edition of the original Pali. This is a regrettable and clumsy convention, since it binds references to a specific paper edition. I hope it is swiftly abandoned in favor of proper semantic references. However, the PTS volume/page numbers are displayed on SuttaCentral in case you need to look up a legacy reference.`}
              </p>
              <p>
                ${_`Traditionally, the texts were—and often still are—referenced the long way: by <i lang="pi">nikāya</i>, then <i lang="pi">saṁyutta</i> or <i lang="pi">nipāta</i> and/or <i lang="pi">paṇṇasaka</i> (as applicable), then <i lang="pi">vagga</i> and <i lang="pi">sutta</i>. This system is helpful when using manuscripts, as you can narrow your search step by step through the manuscript to find what you need. On the web, or even in books, however, it is unnecessary. Nevertheless, you can use the traditional navigation structure in our sidebar if you wish.`}
              </p>
              <h2 id="item5">${_`Elements of Structure`}</h2>
              <p>
                ${_`As students of Buddhist texts we are interested in the content, in learning what the Buddha and his disciples had to say and how they lived. However, due to the manner in which the texts are arranged, we quickly discover that it’s not easy to know how different texts relate to each other. So while it may seem dry, it is worth spending a little time to consider the <em>structure</em> of the texts.`}
              </p>
              <p>
                ${_`Early Buddhist texts were organized, not for reading, but for oral recitation and memorization. The overriding concern was to divide the texts into chunks that could be memorized and recited together. Since the texts were preserved in memory, they were largely “random access”: a skilled student could instantly recall a passage from anywhere in the texts, without having to flip through the pages or look up an index. In this way, the earliest system of organization is a little similar to how we find information today through a search engine.`}
              </p>
              <p>
                ${_`It follows from this that we cannot expect early Buddhist texts to be structured sequentially like a modern book. But this does not mean that the collections are random or chaotic. They follow their own logic, which can be discerned if the texts are approached sympathetically.`}
              </p>
              <p>
                ${_`Here are some of the structural or formal elements you will encounter in the early Buddhist texts.`}
              </p>
              <h3>${_`Imagery and Narrative`}</h3>
              <p>
                ${_`The suttas frequently employ an ABA pattern. A statement is made; a simile is given; and the statement is repeated.`}
              </p>
              <p>
                ${_`This formal pattern is highly effective in reinforcing learning. First we get the basic idea. But abstract philosophical or psychological statements are hard to understand and remember without any context, so the Buddha illuminates his teaching with a simile. He ends by driving the message home once again.`}
              </p>
              <p>
                ${_`The range of similes in the suttas is truly astounding. The Buddha had an uncanny ability to effortlessly summon an apt comparison from anything that he saw around him. The similes also convey a great deal of incidental detail regarding life and culture in the Buddha’s day, and, more importantly, they show how the Dhamma teaching makes sense in its context. Most of the classic Buddhist images that are familiar today trace their roots to similes used by the Buddha in the early texts.`}
              </p>
              <p>
                ${_`Sometimes the similes are extended to a brief parable or fable. Curiously enough, however, we rarely see the Buddha engage in story-telling of any length.`}
              </p>
              <p>
                ${_`Where narratives are developed in some detail, they are typically as part of the background story (<i lang="pi">nidāna</i>) rather than in the Buddha’s teaching as such. It is an elementary principle of historical scholarship that the background story is of a somewhat later date than the main doctrinal material. Such stories vary considerably in the parallels, showing that the traditions treated narrative more flexibly than doctrine.`}
              </p>
              <h3>${_`Repetition`}</h3>
              <p>
                ${_`It won’t take long before you notice that the suttas tend to be repetitious. <em>Very</em> repetitious. This can be a major hurdle for a new reader, so let’s take a little time to consider what is happening.`}
              </p>
              <p>
                ${_`Like so many patterns found in nature, the repetitions are <em>fractal</em>. That is, they occur at every level: the word, the phrase, the sentence, the paragraph, the passage, the whole text, even the group of texts. This shows that the repetition is not something alien to these texts, not something forced on them by an over-zealous editor, but is intrinsic from the beginning.`}
              </p>
              <p>
                ${_`But why? The thing to remember is that the texts were formed in an oral tradition. And in an oral tradition, repetition works very differently than it does in writing. When you <em>read</em> a repetition, it can be annoying; it feels like a waste of time, and you want to skip over it. But when <em>reciting</em>, repetition has exactly the opposite effect. It is soothing and relaxing. The parts that are different take more work, you have to exercise your memory; but when the repeated passage comes around—like the chorus of a song—you relax into the flow of the chanting. Repetitions give the reciter space to be at ease and contemplate. Reciting a highly repetitive text becomes a form of meditation, where you reflect the meaning and apply it to your experience as you recite.`}
              </p>
              <p>
                ${_`But in addition to this spiritual aspect, repetition has a definite practical purpose: preservation. By saying the same thing again and again, identically or with small variations, the reciters were constantly checking their memories, ensuring the accuracy of the texts. And if a text was lost, there is always another similar passage somewhere else. Thus the repetitions ensured the long-term survival of the Dhamma by creating backups of important information in multiple places, retained in the minds of Buddhist practitioners.`}
              </p>
              <p>
                ${_`Understanding the historical role of repetitions, however, doesn’t help us when we just want to read a sutta. What are we to do? Well, there is no single way to read a sutta. Some people prefer to read them in full, contemplating each repetition. Others read them more briefly, getting to the important point. You’ll figure out a way that suits you. But when you understand the role of repetitions, hopefully you will not find them such an obstruction.`}
              </p>
              <h3>${_`Abbreviation`}</h3>
              <p>
                ${_`The flipside of repetition is abbreviation. Since the repetitions are so abundant, they are often abbreviated. Such abbreviation is not a modern invention; it is found throughout the manuscripts, and indeed there is no edition that fully spells out all the repetitions. The Pali texts have their own convention for indicating abbreviations, marked with the syllable <i lang="pi">pe</i>, itself an abbreviation of <i lang="pi">peyyāla</i>.`}
              </p>
              <p>
                ${_`Generally speaking, the abbreviations in the Pali editions, and the occasional instructions on how to spell out the full text, are sensible and fairly consistent between editions. Modern translations follow the manuscript tradition, but not slavishly. Sometimes the translation will spell out abbreviated passages, or else abbreviate passages spelled out in the original.`}
              </p>
              <p>
                ${_`Abbreviations are both “internal” or “external”. By internal abbreviation, I mean that there is enough information in the text itself to fully reconstruct it. Typically only the first and last items in a list are spelled out in full, and for the rest, only the key terms are mentioned. Here is an example from <a class="ref" href="/sn22.137">SN 22.137</a>:`}
              </p>
              <blockquote>
                <p>
                  ${_`Form is impermanent; you should give up desire for it. Feeling … Perception … Choices … Consciousness is impermanent; you should give up desire for it.`}
                </p>
              </blockquote>
              <p>
                ${_`In external abbreviations, an abbreviated passage cannot be fully reconstructed from the context, but requires looking up another text to fill in the blanks. This is another example of how the oral tradition differs from written texts. A reciter would obviously know, say, the formula for the four noble truths, so there is no need to write it every time; just enough to jog the memory. But in modern editions, especially on the web, a reader can access a specific text from anywhere, and may never have encountered the abbreviated passage before. For this reason I tried to reduce the number of external abbreviations in my translations.`}
              </p>
              <h3>${_`Titles`}</h3>
              <p>
                ${_`Buddhist manuscripts rarely have titles at the start like modern texts. Rather, the title is recorded at the end. In modern editions, these titles have been added at the start for clarity.`}
              </p>
              <p>
                ${_`In many cases, especially in the titles of suttas and <i lang="pi">vaggas</i>, what we actually have in the manuscript is not really a title as such, but a key word found in the summary verse (<i lang="pi">uddāna</i>) found at the end of a <i lang="pi">vagga</i> or other division. These verses were inserted by the redactors of the canon in order to help keep the contents organized, much like a Table of Contents. However, the summary verses do vary to some extent between editions, so the titles of suttas are not always consistent. In addition, some suttas are assigned more than one title in the text itself—for example <a class="ref" href="/dn1">DN 1</a> <cite class="text-translated">The Prime Net</cite> (<cite class="text-root">Brahmajalasutta</cite>)—or there are spelling variations. So take care, for it is quite common to find different titles for the same text.`}
              </p>
              <h3>${_`Textual Divisions`}</h3>
              <h4>${_`Vagga (“Chapter”)`}</h4>
              <p>
                ${_`The <i lang="pi">vagga</i> is the most widespread and distinctive structural unit in early Buddhist texts. It usually consists of ten texts, which may be ten discourses, ten verses, ten rules, and so on. The number ten is adhered to fairly consistently, although on occasion a <i lang="pi">vagga</i> may contain more or less than ten.`}
              </p>
              <p>
                ${_`The <i lang="pi">vagga</i> is often little more than a convenient grouping to help organize the discourses neatly. In such cases, a <i lang="pi">vagga</i> is usually just named after its first discourse.`}
              </p>
              <p>
                ${_`However, it is also common to find that a <i lang="pi">vagga</i> collects discourses with a loose thematic unity. For example, in the <a href="dn-silakkhandhavagga"><cite class="text-translated">Chapter on the Full Spectrum of Ethics</cite></a> (<cite class="text-root">Sīlakkhandhavagga</cite>) of the Dīgha Nikāya (thirteen discourses in this case), almost all the texts deal with the “gradual training” of ethics, meditation, and wisdom.`}
              </p>
              <p>
                ${_`In some cases, a <i lang="pi">vagga</i> in Pali may parallel a similar <i lang="pi">vagga</i> in another language. For example, the famous <a href="snp-atthakavagga"><cite class="text-translated">Chapter of the Eights</cite></a> (<cite class="text-root">Aṭṭhakavagga</cite>) of the Sutta Nipāta exists in Chinese translation, though the Sutta Nipāta as a whole does not. Similarly, the <cite class="text-root">Sīlakkhandhavagga</cite> of the Dīgha Nikāya has parallels in both the Dharmaguptaka (Chinese) and Sarvāstivāda (Sanskrit) texts of the Dīgha.`}
              </p>
              <p>
                ${_`Occasionally the word <i lang="pi">vagga</i> is applied to a larger textual unit, one that includes a number of sections, each of which composed of “little” <i lang="pi">vaggas</i>. Examples of such nested <i lang="pi">vagga</i> structures include the Saṁyutta Nikāya and the Khandhakas of the Pali Vinaya.`}
              </p>
              <h4>${_`Paṇṇāsaka (“Fifty”)`}</h4>
              <p>
                ${_`The word <i lang="pi">paṇṇāsa</i> means “fifty”, and a <i lang="pi">paṇṇāsaka</i> is a group of approximately fifty suttas, or five <i lang="pi">vaggas</i>. It is used to organize collections that contain many <i lang="pi">vaggas</i>. Most of the collections with large numbers of discourses use this structure, for example the “<a href="mn-mulapannasa"><cite class="text-translated">Root Fifty</cite></a>” of the Majjhima Nikāya (<cite class="text-root">Mūlapaṇṇāsa</cite>). The <i lang="pi">paṇṇāsaka</i> is purely for convenience and does not correspond to any meaningful division of the text.`}
              </p>
              <h4>${_`Nipāta (“Group”)`}</h4>
              <p>
                ${_`The literal meaning of <i lang="pi">nipāta</i> is “fallen down”, and it is a generic term for texts that have been placed together. In the Aṅguttara, it is used for each division of texts gathered together by number: the <a href="an1">group of discourses consisting of one item</a>, and so on. Elsewhere it is used, for example, in the title of the <a href="snp" class="text-root">Sutta Nipāta</a>, the “Group of Discourses”.`}
              </p>
              <h4>${_`Saṁyutta (“Collection of Linked Discourses”)`}</h4>
              <p>
                ${_`Whereas the <i lang="pi">nipāta</i> is quite generic, the <i lang="pi">saṁyutta</i> has a more specific meaning: texts collected according to a similar theme or subject matter. The Saṁyutta Nikāya consists of 56 such collections. For example, the fourteenth <i lang="pi">saṁyutta</i> contains <a href="sn14">39 discourses on the topic of the elements</a>.`}
              </p>
              <h4>${_`Nikāya or Āgama (“Division”)`}</h4>
              <p>
                ${_`The largest structural unit, usually known as <i lang="pi">nikāya</i> in the Pali tradition of the Theravāda, and as <i lang="pi">āgama</i> in the northern traditions. However, the term <i lang="pi">āgama</i>, while it has fallen into disuse in modern Theravāda, is found quite commonly in the Pali commentaries.`}
              </p>
              <p>
                ${_`Collections similar to the four <i lang="pi">nikāyas</i> as found in the Pali are found in all the other schools. However, while the overall nature of the collections is similar, and they are organized in similar ways, the detailed content varies considerably. It frequently happens that a sutta found in the Majjhima of one school, for example, may be found in the Saṁyutta or Dīgha of another school. In addition, the internal sequence of texts is quite different. Thus it seems that the <i lang="pi">nikāyas</i> or <i lang="pi">āgamas</i> functioned more as organizational guidelines than as fixed units.`}
              </p>
              <p>
                ${_`The fifth Pali <i lang="pi">nikāya</i>, the Khuddaka Nikāya, is more flexible and varies more between traditions. It seems it originated as a place for collecting verses and minor texts not gathered elsewhere. However the Pali collection became a handy place to include later texts, so it has now become the biggest of all the <i lang="pi">nikāyas</i>. While there are occasional references to a similar collection in the northern schools, none exist in that form today. Nevertheless, many of the individual texts of the Khuddaka have parallels, especially the Dhammapada, which survives in many different editions.`}
              </p>
              <h2 id="item6">${_`In the Buddha’s Day: A Time of Change`}</h2>
              <p>
                ${_`Each discourse begins with a brief statement saying that at “one time” the Buddha was staying at a particular place. In this way the redactors of the texts were concerned to locate the Buddha and his teachings in a specific historical and cultural context. Modern scholars have been able to reconstruct a fairly reliable picture of the Buddha’s life and times, relying on the early Buddhist texts, as well as what information may be gleaned from Brahmanical and Jaina scriptures.`}
              </p>
              <p>
                ${_`Archeology is, unfortunately, of limited use, as there are few archeological remnants from the Buddha’s day. In fact, before the time of Ashoka—perhaps 150 years after the Buddha—there are very few remains at all of ancient India, until the time of the Indic Valley civilization, many centuries earlier. For the period we are interested in, what has been found consists of some pottery and similar small implements, as well as a few remnants of fortifications around Kosambī. The paucity of evidence is due to two main reasons. The first is that buildings at the time were mostly of wood or other perishable materials. And the second is that archeological work in India has been very spotty and incomplete.`}
              </p>
              <p>
                ${_`The Buddha lived in the 5th century BCE in the Ganges plain in northern India. The exact dates of his birth and death are uncertain, but modern scholarly opinion tends to place his birth around 480 BCE and his death 80 years later at around 400 BCE. He was born in Lumbini and grew up in Kapilavatthu, both of which belong to the Sakyan republic, straddling the modern border of India and Nepal. His family name was Gotama; the earliest texts do not mention his personal name, but tradition says it was Siddhattha.`}
              </p>
              <p>
                ${_`After his Awakening, the Buddha traveled about the Gangetic plain. The area he traversed was part of the cultural/political region known as the “sixteen nations” (<i lang="pi">janapada</i>). This spanned from modern Delhi to the north-west, the Bangladesh border to the east, the Himalayan foothills to the north, the Deccan to the south, and Ujjain to the south-west. Most of his time was spent around the cities of Sāvatthī in the kingdom of Kosala and Rājagaha in the kingdom of Magadha. Despite the proliferation of local legends in most Buddhist countries, the Buddha never ventured outside this area.`}
              </p>
              <p>
                ${_`It was not just the Buddha who was restricted to this region. It seems that trade and other close cultural contacts normally took place within this region, too. Occasional references to places further afield—southern India or the Greeks—were vague and often legendary. It was in the century after the Buddha passed away that the kingdoms of northern India were unified and regular international trade routes were opened, first to Europe, and, a couple of centuries later, to south-east Asia and China.`}
              </p>
              <h2 id="item7">${_`Economics and Politics`}</h2>
              <p>
                ${_`Though cities and urban life feature prominently in the texts, they are still on a small scale. The economy was largely rural, with farming playing a prominent role.`}
              </p>
              <p>
                ${_`However there are lists of occupations in the Pali canon that show a diverse range of employment—accountants, jewelers, builders, soldiers, doctors, government officials, and many more.`}
              </p>
              <p>
                ${_`The rise in diversity of employment was linked to the growth of cities, which in turn is associated with the appearance of new technologies. The archeological record, though thin, has furnished us with records of two significant innovations: forges for iron, and a kind of fine pottery known as Northern Black Polished Ware. These new developments attest to a growing mastery in the industrial use of fire, something that the suttas mention in several memorable similes.`}
              </p>
              <p>
                ${_`Technological innovation drove economic growth. We frequently hear of wealthy individuals, employing large staffs and managing properties or businesses. There was enough economic surplus to support a large class of spiritual seekers. Such ascetics made no material contributions to society; their value lay in spiritual and ethical development.`}
              </p>
              <p>
                ${_`These technological and economic shifts were mirrored in the political sphere. There were two major forms of governance. Traditional clans such as the Sakyans or the Vajjians followed an ancient restricted form of democracy, where decisions were made in a town council, and the clan elected a leading member as temporary ruler. Other nations, like Kosala and Magadha, had formed a more familiar kind of kingdom, with an absolute hereditary monarch. While the Buddha evidently favored the democratic ideals under which he grew up, and after which he modeled the governance of the Sangha, it was the kingdoms that were growing in economic and military dominance. During the Buddha’s lifetime, there were repeated skirmishes between Kosala and Magadha, vying for dominion over the ancient sacred city of Varanasi.`}
              </p>
              <p>
                ${_`Of even greater significance, towards the end of his life, Magadha was announcing its intentions to invade the Vajjian republic. History attests to the success of this policy: in the decades following the Buddha’s death, Magadha conquered virtually all of the sixteen nations, establishing an unquestioned supremacy over the region, and establishing pan-Indian trade networks. So powerful was the resulting kingdom that Alexander the Great’s troops rebelled at the mere rumor of Magadhan military might.`}
              </p>
              <h2 id="item8">${_`Social Life`}</h2>
              <p>
                ${_`The growing complexity of economic and political life required corresponding changes in social roles and responsibilities. Like any society in a time of change, people in the time of the Buddha were trying to balance their traditional values and structures with the new realities. It seems that people were for the most part reasonably well off. Still, poverty and famine, along with injustice, banditry, and economic uncertainty, were present and posed a very real threat. We hear frequent laments about how unpredictable wealth is, whether the older forms of wealth in cattle and land, or the newer forms in money and career.`}
              </p>
              <p>
                ${_`The Buddha was not a social revolutionary and did not overtly agitate for an overthrow of social systems, even those he recognized as unjust. Typically he would argue for a more just and fair implementation of existing norms. For example, rather than saying all societies should be democratic, he spoke of the moral duty of a king to look after his people.`}
              </p>
              <p>
                ${_`A man was expected to earn a living so as to maintain and protect his family. He should use his earnings to provide his family with both essentials and luxuries, and to treat workers with kindness and decency, while not neglecting to assign some funds for savings, and some for donations to charity.`}
              </p>
              <p>
                ${_`A woman’s traditional role was to marry and bear children. Aside from this, her options were limited. We rarely hear of professional women aside from sex workers. In this context, the opportunity to become a nun allowed women to pursue their own spiritual and intellectual development, to act as leaders and teachers, and to be respected and supported in that role.`}
              </p>
              <p>
                ${_`Many of the more extreme manifestations of sexual discrimination are not found in the early texts. We find no mention of child brides, immolation of widows, or the essential subjugation of women to men.`}
              </p>
              <p>
                ${_`India had not yet developed a full-fledged caste system. But there was a much simpler fourfold division of society:`}
              </p>
              <dl>
                <dt>${_`Aristocrats (<i lang="pi">khattiya</i>)`}</dt>
                <dd>
                  ${_`Owners of land (<i lang="pi">khetta</i>), typically wealthy and powerful, engaged in statecraft, war, and production. The Buddha was from an aristocratic clan. The aristocrats placed themselves at the highest tier of society.`}
                </dd>
                <dt>${_`Brahmins (<i lang="pi">brāhmaṇa</i>)`}</dt>
                <dd>
                  ${_`Members of a hereditary priestly class. The brahmins were custodians of sacred texts called “Vedas”, and performed rituals and ceremonies to their various deities. However by the time of the Buddha many brahmins were simply engaged in ordinary worldly livelihoods and their religious role was secondary. They believed themselves to be the children of God (Brahmā).`}
                </dd>
                <dt>${_`Merchants (<i lang="pi">vessa</i>):`}</dt>
                <dd>${_`Engaged in trade and commerce.`}</dd>
                <dt>${_`Workers (<i lang="pi">sudda</i>)`}</dt>
                <dd>${_`Performed physical labor.`}</dd>
              </dl>
              <p>
                ${_`Not everyone fit into this neat scheme. We hear reference to outcastes and various tribal peoples. In addition, there were slaves or bonded servants. Finally, the ascetics (<i lang="pi">samaṇa</i>) such as the Buddha saw themselves as having left behind all such notions of caste.`}
              </p>
              <h2 id="item9">${_`The Many Spiritual Paths of Ancient India`}</h2>
              <p>
                ${_`Change in the Buddha’s day was not limited to the worldly sphere. The religious life of ancient India was equally dynamic. For this reason it would be a mistake to assume that India in the time of the Buddha was primarily a Hindu society. Some of the elements that make up modern Hinduism may be discerned, but Indian religion, like spiritual and religious practice everywhere, has always been in a state of flux and evolution.`}
              </p>
              <p>
                ${_`In the time of the Buddha, and indeed even to this day, the ancient pre-Buddhist Vedas formed the basis for the spiritual life of the brahmins and those who followed them. Rituals such as the <i lang="san">agnihotra</i>, the daily pouring of ghee onto the fire as an offering to the fire-god Agni—originated long before the Aryan people even came to India, and continue to be performed today.`}
              </p>
              <p>
                ${_`Nevertheless, many of the old gods featured in the Vedas had vanished by the time of the Buddha, and many of the famed deities of later Hinduism had not yet appeared. Those who do appear take on a markedly different aspect; prominent gods such as Vishnu (Pali: <i lang="pi">Veṇhu</i>) or Shiva (Pali: <i lang="pi">Siva</i>) appear in minor roles, and a warrior like Sakka (AKA Indra) appears as an apostle of peace. There were no temples, no images, and no cult of devotion (<i lang="san">bhakti</i>). There is no mention of a system of <i lang="san">avatars</i>, nor of familiar concepts from modern Hindu-inspired spirituality such as <i lang="san">śakti</i>, <i lang="san">kuṇḍalinī</i>, chakras, or yoga exercises.`}
              </p>
              <p>
                ${_`Moreover, when we look at the aspects of modern Hinduism that were present at the time, many of them are completely separate from each other. No-one considered, for example, the worship of a local dragon (<i lang="pi">nāga</i>) to have anything to do with the rites of the brahmins. The outstanding feature of Hinduism—the great synthesis of religious and philosophical ideas and practices, from simple animism to profound non-dualism—had not yet been undertaken. Different strands of religious life were quite distinct and were not considered to be part of the same path.`}
              </p>
              <p>
                ${_`Thus historians do not refer to the brahmanical religion of the time as Hinduism, but rather as Vedism or Brahmanism. It was nearly a thousand years later that the movement recognizable as modern Hinduism became prominent in India. To be sure, much of Hinduism is drawn from the Vedas, in the same way that much of Catholicism is drawn from the Hebrew scriptures that Christians call the Old Testament. But were you to meet Abraham or Noah and address them as “Catholics”, they would not know what you are talking about. And the Indians of the Buddha’s time would have been equally unfamiliar with the very idea of “Hinduism”.`}
              </p>
              <p>
                ${_`All this notwithstanding, there is an oft-repeated claim to the effect that the Buddha “was born, lived, and died a Hindu”, attributed to the great pioneer of Indology, Thomas Rhys Davids. While it is true that he did write this, it was in an early work, page 116 of <cite class="book">Buddhism: its history and literature</cite>, a lecture series published in 1896. But by 1912 his views had changed, for on page 83 of <cite class="book">Buddhism: Being a sketch of the life and teachings of Gautama, the Buddha</cite>, he said:`}
              </p>
              <blockquote>
                <p>
                  ${_`Gautama was born, and brought up, and lived, and died a typical Indian. Hinduism had not yet, in his time, arisen.`}
                </p>
              </blockquote>
              <p>
                ${_`Rhys Davids emphasizes that the Buddha did not have an antagonistic relation to the Brahmanical religion. His purpose was not religious reform, but freedom from suffering. However, on page 85 of the same work he comments:`}
              </p>
              <blockquote>
                <p>
                  ${_`In the long run the two systems were quite incompatible. … Gautama’s whole training lay indeed outside of the ritualistic lore of the Brahmanas and the brahmins. The local deities of his clan were not Vedic.`}
                </p>
              </blockquote>
              <p>
                ${_`The lesson here is that we must avoid reading modern conditions back into ancient times. The peoples of ancient India had their own rich, complex, and many-faceted spiritual lives. We can only begin to understand them, and to understand how the Buddha related to them, when we set aside our modern preconceptions and preoccupations and listen to what they had to say for themselves.`}
              </p>
              <p>
                ${_`An outstanding feature of early Buddhist texts is interreligious dialogue. The Buddha did not live in a Buddhist culture. We frequently encounter the Buddha and his disciples discussing various aspects of spiritual philosophy and practice with followers of other spiritual paths, or with people of no particular path. Sometimes they would come to the Buddha seeking to learn or even to attack. And it is not uncommon to find the Buddha and his disciples actively seeking out followers of other spiritual paths simply to engage in conversation. In this, the early texts are quite different from later Buddhist literature, which almost always consists of Buddhists speaking with other Buddhists.`}
              </p>
              <p>
                ${_`While many of these people ended up declaring themselves followers of the Buddha, this was not the purpose of the dialogue. The Buddha did not debate simply to win an argument, but out of compassion, to help alleviate suffering.`}
              </p>
              <p>
                ${_`Amid the complex sets of religious practices, we may discern three major domains.`}
              </p>
              <h3>${_`Animism`}</h3>
              <p>
                ${_`In the villages and towns of ancient India, the most widespread folk religion was a belief in the omnipresent reality of spirits in nature. Such deities might embody aspects of the weather, or live in plants or rivers or caves; they might promote abundance, or take ferocious and threatening forms. They were unreliable, but could be wooed through simple offerings of rice, flowers, or ghee.`}
              </p>
              <p>
                ${_`Animist beliefs were derived from local legends and rituals, not from religious philosophy. However, the higher religious paths such as Buddhism or Jainism, rather than repressing such beliefs, were happy to assign them a minor role in the scheme of things, so long as they eliminated harmful practices like human or animal sacrifice.`}
              </p>
              <p>
                ${_`Throughout the Buddhist texts, we hear of <i lang="pi">yakkhas</i> (spirits), <i lang="pi">nāgas</i> (dragons), <i lang="pi">gandhabbas</i> (fairies), <i lang="pi">garudas</i> (phoenixes), and many more. The Buddhist attitude towards such beings might best be described as “good neighborliness”. Neither they, nor any higher beings, are worshiped or looked to for salvation. Rather, they are treated with respect and dignity, for who knows? If they are real, it would be good to have them on your side.`}
              </p>
              <h3>${_`Brahmanism`}</h3>
              <p>
                ${_`The caste who called themselves “brahmins” inherited an ancient body of sacred lore known as the Vedas. This consisted of sets of oral scriptures, among which the Ṛg Veda was primary. In the early Buddhist texts there are three Vedas: Ṛg, Sāma, and Yajur; the Atharva is mentioned, but was not yet considered to be a Veda.`}
              </p>
              <p>
                ${_`The Ṛg Veda grew out of the cultural and religious milieu of the ancient Indo-European peoples. It shares a common heritage with the Avestan texts of Iranian Zoroastrianism, and more distantly, the mythologies of Europe.`}
              </p>
              <p>
                ${_`It seems that Indo-European peoples moved into India around a millennium before the Buddha, with distinct clans maintaining sets of sacred lore. In the early centuries of the first millennium BCE, in the area known as the Kuru country (modern Delhi), the clans were unified into the classical brahmanical kingdom whose story is echoed in the Mahābharata. The Ṛg Veda was forged from the books of the clans, wrapped in opening and closing chapters emphasizing unity. By the time of the Buddha, the brahmanical culture and language had already become strongly established in the regions further south and east where the Buddha lived.`}
              </p>
              <p>
                ${_`The brahmins insisted on the holiness of their caste, the efficacy of their rituals, the truth of their scriptures, and the omnipotence of their deity. The Buddha rejected all these claims out of hand.`}
              </p>
              <p>
                ${_`However, Brahmanical traditions were far from a unified monolith. We see a strong strand of questioning of tradition, of seeking out new ways, of earnest seeking of the truth; and such attitudes are just as strong in the Brahmanical texts as the Buddhist.`}
              </p>
              <p>
                ${_`Brahmins were typically family men, living a settled life, and expecting a degree of social respect and standing due to their learning and caste. But some brahmins had adopted an ascetic lifestyle, apparently influenced by the <i lang="pi">samaṇas</i>.`}
              </p>
              <p>
                ${_`In the generations preceding the Buddha, brahmanical philosophy had reached a peak in the Upaniṣads, with their sophisticated debates and mystic philosophy of the essential unity of self and cosmos. These texts form the immediate dialectical context of the Buddha’s philosophy. Yājñavalkya, a key Upaniṣadic philosopher, lived around Mithila, in the same region traversed by the Buddha, no more than a century or two before him. Some early Upaniṣads are apparently referred to in <a class="ref" href="/dn13">DN 13</a> <cite class="text-translated">The Three Knowledges</cite> (<cite class="text-root">Tevijjasutta</cite>), and the Upaniṣadic doctrine of “self” (<i lang="san">ātman</i>) was prominently rejected by the Buddha in his most distinctive teaching: not-self (<i lang="pi">anattā</i>).`}
              </p>
              <h3>${_`The Samaṇas`}</h3>
              <p>
                ${_`Quite distinct from the brahmins, and often in opposition to them, was a complex set of religious movements known as the <i lang="pi">samaṇas</i> or “ascetics”. Six prominent ascetic schools were acknowledged in the time of the Buddha. The Buddha counted himself as an ascetic, too, in view of the many similarities between his own movement and theirs.`}
              </p>
              <p>
                ${_`Like the Buddhist mendicants, the other <i lang="pi">samaṇas</i> were typically celibate renunciates, living either in solitude or in monastic communities, and relying on alms for food. The most famous movement—and the only one to survive until today—was Jainism, which flourished under their leader Mahāvīra, known as Nigaṇṭha Nātaputta in the Buddhist texts.`}
              </p>
              <p>
                ${_`The ascetics shared an iconoclastic attitude, and all rejected the brahmanical system <i lang="lat">in toto</i>. However they varied amongst each other, as shown in their teachings attested at <a class="ref" href="/dn2">DN 2</a> <cite class="text-translated">The Fruits of the Ascetic Life</cite> (<cite class="text-root">Sāmaññaphalasutta</cite>) as well as <a class="ref" href="/mn60">MN 60</a> and <a class="ref" href="/mn76">MN 76</a>. Some emphasized austerities and self-mortification, others rationality and debate. Some advocated ardent effort, others a resigned fatalism. Some taught rebirth, while others asserted that this material world was the only reality.`}
              </p>
              <p>
                ${_`While their doctrines may appear florid and obscure, and their practices sometimes bizarre and pointless, the ascetic movements are a lasting testament to the diversity, vigor, and innovation of religious life in ancient India.`}
              </p>
              <h2 id="item10">${_`Cosmology`}</h2>
              <p>
                ${_`A recurring theme in many of the religious strands of India is a concern for cosmology. A religious philosophy was expected to paint a picture of the world on a large scale and indicate humanity’s role within it. Like all aspects of religious life, such cosmologies were partly shared across traditions and in part were unique to each tradition.`}
              </p>
              <p>
                ${_`Some traditions asserted a materialist cosmology, rejecting the notion that one would be reborn in any other state, and asserting that only this life was real.`}
              </p>
              <p>
                ${_`Most cosmologies, however, posited multiple realms of existence. Beings would come and go from these different stations. Some were pleasant and desirable, while others were not. As to why this was so, different reasons were given.`}
              </p>
              <ul>
                <li>
                  ${_`Some ascetics argued that beings transmigrated due to destiny or chance.`}
                </li>
                <li>
                  ${_`Mainstream Brahmanical traditions said it was due to the performance of rituals and sacrifices to the gods.`}
                </li>
                <li>
                  ${_`Some said that rebirth was determined by intentional actions, whether moral or immoral.`}
                </li>
              </ul>
              <p>
                ${_`The latter view was held by some ascetic schools, such as Buddhism and Jainism, and some of the more advanced and innovative threads of Brahmanism. These traditions shared a conception of transmigration that in many ways is quite similar. Three common elements can be discerned:`}
              </p>
              <ol>
                <li>
                  ${_`All sentient beings are reborn countless times in process called <i lang="pi">saṁsāra</i> (“transmigration”).`}
                </li>
                <li>
                  ${_`This process is driven by ethical choices (<i lang="pi">kamma</i>). Good deeds lead to a pleasant rebirth; bad deeds lead to a painful rebirth.`}
                </li>
                <li>
                  ${_`True salvation is not found in any realm of existence, but only in liberation from transmigration itself.`}
                </li>
              </ol>
              <p>
                ${_`While these aspects of the cosmology were shared, the details differed in both theory and practice.`}
              </p>
              <p>
                ${_`Jain and Brahmanical theory proposed that transmigration was undergone by a soul or self which could attain freedom. For the Jains, the individual soul (<i lang="pi">jīva</i>) attains eternal purity and bliss. For the most sophisticated among the brahmins, the individual self (<i lang="san">ātman</i>) realizes its true nature as identical with the divinity that is the cosmos itself (Sanskrit: <i lang="san">tat tvam asi</i>; Pali: <i lang="pi">eso hasmasmi</i>; <i lang="pi">so attā so loko</i>).`}
              </p>
              <p>
                ${_`The Buddha rejected all such metaphysical notions of self or soul. Instead, he explained transmigration as an ongoing process of changing conditions, formulated as the famous twelve links of dependent origination (<i lang="pi">paṭicca samuppāda</i>).`}
              </p>
              <p>
                ${_`In the practical application of their theory, Jains believed that the way to salvation was to firstly avoid harming any sentient beings, even unintentionally, and then to burn off past <i lang="pi">kamma</i> through painful self-mortification. Such practices are described frequently and in detail, attesting to their prominence in early Indian spiritual life.`}
              </p>
              <p>
                ${_`The brahmins, as seen in the suttas, did not have such a clear and unambiguous path to a highest goal, and indeed are depicted as arguing among themselves as to the correct path. This reflects the historical situation, where the earlier, simpler, and more worldly goals of Vedic Brahmanism were growing into a more sophisticated Upaniṣadic form.`}
              </p>
              <p>
                ${_`For the Upaniṣads, the key to salvation was understanding. It is only one who understands the rituals and philosophies correctly (<i lang="san">ya evam veda</i>) who will experience their full benefit. In the centuries prior to the Buddha, this path of wisdom had developed into a profound contemplative culture, expressed in the ecstatic and mystical passages of the Upaniṣads.`}
              </p>
              <p>
                ${_`The Buddha shared the Jain concern for avoiding harm, but rejected the practice of extreme austerities. Rather than bodily torment, he emphasized mental development.`}
              </p>
              <p>
                ${_`Certain Brahmanical lineages had developed meditation to a high degree, but meditative states were still conceived in metaphysical terms. The Buddha adopted such meditations for their value in purifying the mind, but interpreted them in purely psychological terms, rejecting metaphysics entirely.`}
              </p>
              <p>
                ${_`One of the benefits of advanced meditation was that a practitioner would develop the ability to perceive many past lives and many realms into which beings may be reborn. In this, we may distinguish between the core doctrinal texts, which typically speak of rebirth in general terms as good or bad destinies, and the narrative portions, which depicted the realms of rebirth in terms familiar from popular Indian cosmology.`}
              </p>
              <p>
                ${_`The early texts do not attempt to systematize these realms in any great detail. Indeed, the various deities and realms mentioned defy any simple categorization. Later Buddhism developed a theory of various realms, sometimes called the 31 planes of existence, but this does not fully represent the situation as found in the early texts.`}
              </p>
              <p>
                ${_`Here is a general overview of the most important realms found in the suttas. It is crucial to remember that, in the Buddhist view, all of these, even the most high, are impermanent and do not constitute true freedom. They are not separate metaphysical planes, but mere stations in which consciousness may spend some time during its long journey.`}
              </p>
              <dl>
                <dt>${_`Brahmā realms`}</dt>
                <dd>
                  ${_`The highest heavens, which correspond to attainments of absorption meditation (<i lang="pi">jhāna</i>), and may only be attained by <i lang="pi">jhāna</i> practitioners. The Brahmā realms include the realms of luminous form (<i lang="pi">rūpaloka</i>) and the formless realms (<i lang="pi">arūpaloka</i>). The former are attained by means of the four primary absorptions. In this context, the word “form” refers to the refined and radiant echo or reflection of the original meditation subject upon which these states are based. The formless states lie beyond this, and are realized when even that subtle luminosity disappears.`}
                </dd>
                <dt>${_`Heavens of sensual pleasures`}</dt>
                <dd>
                  ${_`Many of these are mentioned, most commonly the realm of the Thirty-Three, governed by Sakka. Various beings from Indian animist beliefs are said to inhabit the lower tiers of these realms.`}
                </dd>
                <dt>${_`Human realm`}</dt>
                <dd>
                  ${_`The most important realm, where Buddhas appear and the spiritual path is taught.`}
                </dd>
                <dt>${_`Lower realms`}</dt>
                <dd>
                  ${_`These include the animal realm, the ghost realm, and the hells. The realm of the <i lang="pi">asuras</i>—titans or demons—is usually placed here in the later cosmologies, but the early texts seem to treat it as one of the heavens.`}
                </dd>
              </dl>
              <p>
                ${_`The Buddha taught that doing good and avoiding bad was the path to rebirth in one of the fortunate realms, which include the human realm and all higher realms. However, the course of transmigration is long and unpredictable, so no heaven realm provides a sure refuge.`}
              </p>
              <p>
                ${_`Far from teaching rebirth as a solace for naive followers unable to face the inevitability of death, rebirth is depicted in traumatic and terrifying terms: the tears that one has shed in the endless course of transmigration are greater than all the waters in all the oceans of the world. Thus the true significance of doing good deeds is not merely to get a better rebirth, but to lay the foundations for higher spiritual development, primarily through meditation.`}
              </p>
              <p>
                ${_`In the core teaching of the four noble truths, the origin of all suffering is traced to the craving that is connected with rebirth (<i lang="pi">yāyaṁ taṇhā ponobbhavikā</i>). The practice of the noble eightfold path is the only thing that enables one to let go of that craving and be free of suffering. This is what the Buddha called “extinguishment” or “quenching” (Pali: <i lang="pi">nibbāna</i>; Sanskrit <i lang="san">nirvāṇa</i>).`}
              </p>
              <h2 id="item11">${_`On the Pali Commentaries`}</h2>
              <p>
                ${_`The Pali canonical texts are accompanied by an extensive and detailed set of commentaries (<i lang="pi">aṭṭhakathā</i>) and subcommentaries (<i lang="pi">ṭīkā</i>). These texts are, for most people, even more mysterious than the canon itself, so let me say a few words on them.`}
              </p>
              <p>
                ${_`The main commentaries were compiled by the monk Buddhaghosa at the Mahāvihāra monastery in Anuradhapura, then the capital of Sri Lanka, in the 5th century. Buddhaghosa inherited a series of older commentaries in the old Sinhalese language, now lost. These had been compiled over the centuries in Sri Lanka, mostly between around 200 BCE–200 CE; that is to say, the main content of the commentaries was closed several centuries before Buddhaghosa.`}
              </p>
              <p>
                ${_`It was all a bit messy, with text in Pali and commentaries in Sinhala, and a variety of different commentarial texts. Buddhaghosa aimed to streamline the situation by combining all the old commentaries into a single system, translated into Pali.`}
              </p>
              <p>
                ${_`Buddhaghosa’s work remains as an extraordinary accomplishment of traditional scholarship. He had an almost preternatural mastery of his materials, and the clarity and rigor of his writings make light work of what must have been an exceedingly difficult task. It is crucial to remember that he saw his work as that of an editor, compiler, and translator. That is what he claimed to be doing, and from everything we know about his work, he was a scholar of integrity who did exactly what he said. When he felt a need to express his own opinion he said so; but such interventions were rare and hesitant. The commentaries are the record of discussions and explanations of the Pali texts handed down in the Mahāvihāra tradition, not the opinions of Buddhaghosa.`}
              </p>
              <p>
                ${_`While Buddhaghosa compiled commentaries on the major texts, he left some incomplete. It is not always certain which commentaries were by him; but in any case later scholars completed his work. Subsequently, subcommentaries were written to clarify obscure points in the commentaries.`}
              </p>
              <p>
                ${_`In modern Theravāda, the commentaries have become a sadly and unnecessarily divisive issue. Some people take the entire tradition uncritically and regard the commentaries as essentially infallible. Others flip to an extreme of suspecting anything in the commentaries, rewriting Theravādin history as a conspiracy of the commentaries. But any serious scholar knows that the commentaries are often helpful, even indispensable, on countless difficult and obscure points. Without them, there is no way we would have been able to create the accurate dictionaries and translations that we have today. Yet they cannot be relied on blindly, for, like any resource, they are fallible, and must be read with a careful and critical eye. On some doctrinal issues, the position of the commentaries had shifted considerably from the stance in the suttas, and not in illuminating ways.`}
              </p>
              <p>
                ${_`I once read some advice from a Burmese Sayadaw—I am afraid this was many years ago and I have forgotten who it was—on how to use the commentaries. He said—and I paraphrase—something like this. First read the sutta. Try to understand it. Read it and meditate on it again and again. If there’s anything you don’t understand, see if it can be explained elsewhere in the suttas. If, at the end of the day, you still cannot understand it, check the commentary. If it answers the question, good. But if, after equally careful study, the commentary is still unclear, then check the subcommentary.`}
              </p>
              <p>
                ${_`This has always seemed like sound advice to me, and I have tried to follow it. The purpose of the commentary is to help explain the suttas. Where the suttas are clear—and mostly they are—there is no need to refer to the commentary. The only extra thing I would add is that, in addition to the commentaries and subcommentaries, we now also have Chinese and Sanskrit parallels to help us understand difficult passages.`}
              </p>
              <p>
                ${_`In these guides, I almost completely leave aside the commentarial explanations. In several places the explanations I have given differ from those in the commentaries. I am aware of this, and have written on most of these things elsewhere, but I do not want to burden the guides by re-litigating every controversy. I don’t contradict the commentaries out of ignorance or stubbornness, but because after many years of study, contemplation, discussion, and practice, I have come to see some things differently.`}
              </p>
              <h2 id="item12">${_`A Brief and Incomplete Textual History`}</h2>
              <p>
                ${_`The significance of the <i lang="pi">nikāyas</i> was recognized by European scholars early on. I will discuss specifics of the editions and translations in the essays on the individual <i lang="pi">nikāyas</i>, and here offer some general remarks.`}
              </p>
              <p>
                ${_`During the 19th century, European scholars became aware of the Pali tradition, seeing in it a reliable source of information for the Buddha, his times and his teachings. An English civil servant in Sri Lanka, Thomas Rhys Davids, learned Pali from the monks, initially to help him better understand Sri Lankan legal practices. Recognizing the significance of these texts, he returned to England and established the Pali Text Society (PTS), largely funded by Asian donors. They obtained palm-leaf manuscripts, on the basis of which the PTS prepared print editions of the main Pali texts.`}
              </p>
              <p>
                ${_`The PTS editions introduced a number of ideas from European scholarship. Most obviously, they used a set of conventions for presenting Indic scripts with European letters. This system is lossless, so texts may be automatically changed from one script to another. It enables easy comparison between the editions of the Pali canon from different countries, which traditionally had been written in diverse local scripts. They also introduced titles at the start of texts, punctuation and capitalization, page numbers, footnotes, variant readings, and various other modern innovations.`}
              </p>
              <p>
                ${_`One innovation that was not pursued consistently was the use of chapter and section numbers. These were added to the PTS Pali editions of the Dīgha Nikāya and the Vinaya, and are used in subsequent translations. However most of the PTS editions lack such sections, with the unfortunate consequence that academic referencing of Pali texts is still based on the volume and page of the PTS edition, a system that is neither practical nor precise.`}
              </p>
              <p>
                ${_`The PTS editions were ground-breaking and have exerted an unparalleled influence on modern Buddhism, both east and west. Asian scholars have been well aware of them, with the consequence that it is probably hard to find any printed edition from the 20th century that is completely free of their influence. Nevertheless, the PTS texts are not particularly reliable. They were put together over a considerable period of time, with scant resources and few workers. The editors used whatever manuscripts they had to hand, and, apart from a general preference for Sri Lankan readings, it is hard to discern a consistent or clear methodology in their choices of readings. The limitations of these editions are well known among experts in the field, and in some cases updated and improved editions have been published.`}
              </p>
              <p>
                ${_`For my translation of the <i lang="pi">nikāyas</i>, I preferred to use the Mahāsaṅgīti edition. This is essentially a digital representation of the Burmese textual tradition of the 6th Council, itself based on the 19th century 5th Council text. It is based on the digital edition prepared by the Vipassana Research Institute, with extensive proofreading and corrections by the Dhamma Society of Bangkok. The Mahāsaṅgīti is a consistent and carefully edited digital text, and for that reason was chosen as the root Pali text for SuttaCentral. But it should not be assumed that it is the most authentic. On the contrary, it preserves the Burmese readings, which tend to correct the text in conformity with the Pali grammars. Nevertheless, in almost all such cases there is no difference in the meaning, just minor differences in spelling.`}
              </p>
              <p>
                ${_`Like most translators, when editions vary I did not adhere to one edition, but simply selected what seems to be the best reading in each case. I referred to the PTS editions fairly often. More rarely, I consulted the romanized Buddha Jayanthi edition found on GRETIL; note, however, that the digital edition is widely regarded as being inferior to the original in Sinhalese script. Occasionally I also consulted the Rama 5 edition in Thai script. I also consulted previous translations, especially those of Bhikkhu Bodhi.`}
              </p>
              <p>
                ${_`In problematic cases I cross-checked the Pali against the Sanskrit and Chinese parallels; I did not make use of Tibetan sources. However in every case the overriding intention was to accurately represent the Pali text. Only in a very few exceptional cases did I rely on the Sanskrit or Chinese parallels to correct the Pali.`}
              </p>
            </article>
          </section>
        </main>
      </div>
    `;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/static_general-guide-sujato-page';
  }
}

customElements.define('sc-general-guide', SCGeneralGuide);
