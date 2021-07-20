import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html';

import { layoutSimpleStyles } from '../styles/sc-layout-simple-styles.js';
import { typographyCommonStyles } from '../styles/sc-typography-common-styles.js';
import { typographyStaticStyles } from '../styles/sc-typography-static-styles.js';
import { SCStaticPage } from '../addons/sc-static-page.js';
import _ from '../../localization/macro.js';

class SCAbbreviationsPage extends SCStaticPage {
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
              <h1>${_`Abbreviations`}</h1>
              <p>
                ${_`SuttaCentral is structured around the idea of a distinct entity—usually a sutta, Vinaya rule, or section of text—which has a unique identity. That identity is represented by an abbreviation, which serves both to label the text and to create the <span class="smallcaps">URL</span> for that text. These abbreviations are as short and flexible as we can make them. While we don’t arbitrarily depart from accepted usage, in certain cases the special requirements of SuttaCentral have meant we have adopted new abbreviations. All abbreviations must satisfy the following criteria.`}
              </p>
              <ul>
                <li>${_`Unique across the entire SuttaCentral corpus;`}</li>
                <li>
                  ${_`No special characters or diacritical marks (as these can’t be used in <span class="smallcaps">URL</span>s);`}
                </li>
                <li>${_`Case insenstive;`}</li>
                <li>${_`Usually two, hopefully no more than three characters long;`}</li>
                <li>
                  ${_`Conforming to recognized standards and conventions such as <span class="smallcaps">ISO</span>.`}
                </li>
              </ul>
              <p>
                ${_`To keep the list a reasonable length we omit language codes, which use the two-letter <span class="smallcaps">ISO</span> 639-1 for modern languages, and the three-letter ISO 639-3 codes for ancient languages.`}
              </p>
              <table>
                <caption>
                  ${_`List of Abbreviations`}
                </caption>
                <tr>
                  <td>${_`-a`}</td>
                  <td>${_`Aṭṭhakathā`}</td>
                </tr>
                <tr>
                  <td>${_`Ab`}</td>
                  <td>${_`Abhidhamma`}</td>
                </tr>
                <tr>
                  <td>${_`ACIP`}</td>
                  <td>${_`Asian Classics Input Project`}</td>
                </tr>
                <tr>
                  <td>${_`AN`}</td>
                  <td>${_`Aṅguttara Nikāya`}</td>
                </tr>
                <tr>
                  <td>${_`Arv`}</td>
                  <td>${_`Arthaviniścaya`}</td>
                </tr>
                <tr>
                  <td>${_`As`}</td>
                  <td>${_`Adhikaraṇasamatha`}</td>
                </tr>
                <tr>
                  <td>${_`Asc`}</td>
                  <td>${_`Abhisamācārika`}</td>
                </tr>
                <tr>
                  <td>${_`Avs`}</td>
                  <td>${_`Avadānaśataka`}</td>
                </tr>
                <tr>
                  <td>${_`Ay`}</td>
                  <td>${_`Aniyata`}</td>
                </tr>
                <tr>
                  <td>${_`BA`}</td>
                  <td>${_`Bhikkhu Adhyāya`}</td>
                </tr>
                <tr>
                  <td>${_`Bc`}</td>
                  <td>${_`Buddhacarita`}</td>
                </tr>
                <tr>
                  <td>${_`Bi`}</td>
                  <td>${_`Bhikkhunī`}</td>
                </tr>
                <tr>
                  <td>${_`Bu`}</td>
                  <td>${_`Bhikkhu`}</td>
                </tr>
                <tr>
                  <td>${_`Bv`}</td>
                  <td>${_`Buddhavaṁsa`}</td>
                </tr>
                <tr>
                  <td>${_`CBETA`}</td>
                  <td>${_`Chinese Buddhist Electronic Text Association`}</td>
                </tr>
                <tr>
                  <td>${_`Cp`}</td>
                  <td>${_`Cariyapiṭaka`}</td>
                </tr>
                <tr>
                  <td>${_`D`}</td>
                  <td>${_`Derge edition of Tibetan canon`}</td>
                </tr>
                <tr>
                  <td>${_`DA`}</td>
                  <td>${_`Dīrghāgama`}</td>
                </tr>
                <tr>
                  <td>${_`DDB`}</td>
                  <td>${_`Digital Dictionary of Buddhism`}</td>
                </tr>
                <tr>
                  <td>${_`Dg`}</td>
                  <td>${_`Dharmaguptaka`}</td>
                </tr>
                <tr>
                  <td>${_`DH`}</td>
                  <td>${_`Dun Huang`}</td>
                </tr>
                <tr>
                  <td>${_`Dhp`}</td>
                  <td>${_`Dhammapada`}</td>
                </tr>
                <tr>
                  <td>${_`Ds`}</td>
                  <td>${_`Dhammasaṅgaṇi`}</td>
                </tr>
                <tr>
                  <td>${_`Divy`}</td>
                  <td>${_`Divyāvadāna`}</td>
                </tr>
                <tr>
                  <td>${_`Dk`}</td>
                  <td>${_`Dharmaskandha`}</td>
                </tr>
                <tr>
                  <td>${_`DN`}</td>
                  <td>${_`Dīgha Nikāya`}</td>
                </tr>
                <tr>
                  <td>${_`Dpvs`}</td>
                  <td>${_`Dīpavaṁsa`}</td>
                </tr>
                <tr>
                  <td>${_`Dt`}</td>
                  <td>${_`Dhātukathā`}</td>
                </tr>
                <tr>
                  <td>${_`Du`}</td>
                  <td>${_`Dukkaṭa`}</td>
                </tr>
                <tr>
                  <td>${_`Dy`}</td>
                  <td>${_`Dhātukāya`}</td>
                </tr>
                <tr>
                  <td>${_`EA`}</td>
                  <td>${_`Ekottarikāgama`}</td>
                </tr>
                <tr>
                  <td>${_`EA2`}</td>
                  <td>${_`2nd Ekottarikāgama`}</td>
                </tr>
                <tr>
                  <td>${_`ed`}</td>
                  <td>${_`edited, edition, editor`}</td>
                </tr>
                <tr>
                  <td>${_`F`}</td>
                  <td>${_`Fragment`}</td>
                </tr>
                <tr>
                  <td>${_`G`}</td>
                  <td>${_`Gilgit`}</td>
                </tr>
                <tr>
                  <td>${_`GBM`}</td>
                  <td>${_`Gilgit Buddhist Manuscripts`}</td>
                </tr>
                <tr>
                  <td>${_`Gd`}</td>
                  <td>${_`Garudhamma`}</td>
                </tr>
                <tr>
                  <td>${_`Gdhp`}</td>
                  <td>${_`Gāndhārī Dharmapada`}</td>
                </tr>
                <tr>
                  <td>${_`Gf`}</td>
                  <td>${_`Gāndhārī fragment`}</td>
                </tr>
                <tr>
                  <td>${_`GRETIL`}</td>
                  <td>${_`Göttingen Register of Electronic Texts in Indian Languages`}</td>
                </tr>
                <tr>
                  <td>${_`GS`}</td>
                  <td>${_`Gradual Sayings`}</td>
                </tr>
                <tr>
                  <td>${_`Hf`}</td>
                  <td>${_`Hybrid Sanskrit fragment`}</td>
                </tr>
                <tr>
                  <td>${_`BHS`}</td>
                  <td>${_`Buddhist Hybrid Sanskrit`}</td>
                </tr>
                <tr>
                  <td>${_`Hv`}</td>
                  <td>${_`Haimavata`}</td>
                </tr>
                <tr>
                  <td>${_`Iti`}</td>
                  <td>${_`Itivuttaka`}</td>
                </tr>
                <tr>
                  <td>${_`Ja`}</td>
                  <td>${_`Jātaka`}</td>
                </tr>
                <tr>
                  <td>${_`Jp`}</td>
                  <td>${_`Jñānaprasthāna`}</td>
                </tr>
                <tr>
                  <td>${_`Ka`}</td>
                  <td>${_`Kaśyapīya`}</td>
                </tr>
                <tr>
                  <td>${_`Kam`}</td>
                  <td>${_`Kammavācā`}</td>
                </tr>
                <tr>
                  <td>${_`KA`}</td>
                  <td>${_`Khuddakāgama`}</td>
                </tr>
                <tr>
                  <td>${_`Kd`}</td>
                  <td>${_`Khandhaka`}</td>
                </tr>
                <tr>
                  <td>${_`Khv`}</td>
                  <td>${_`Khuddakavatthu`}</td>
                </tr>
                <tr>
                  <td>${_`Kf`}</td>
                  <td>${_`Khotanese fragment`}</td>
                </tr>
                <tr>
                  <td>${_`Kh`}</td>
                  <td>${_`Khotanese`}</td>
                </tr>
                <tr>
                  <td>${_`Kp`}</td>
                  <td>${_`Khuddakapāṭha`}</td>
                </tr>
                <tr>
                  <td>${_`KN`}</td>
                  <td>${_`Khuddaka Nikāya`}</td>
                </tr>
                <tr>
                  <td>${_`KS`}</td>
                  <td>${_`Kindred Sayings`}</td>
                </tr>
                <tr>
                  <td>${_`Kv`}</td>
                  <td>${_`Kathāvatthu`}</td>
                </tr>
                <tr>
                  <td>${_`Lal`}</td>
                  <td>${_`Lalitavistara`}</td>
                </tr>
                <tr>
                  <td>${_`ll`}</td>
                  <td>${_`Parallels`}</td>
                </tr>
                <tr>
                  <td>${_`Lo`}</td>
                  <td>${_`Lokuttaravāda`}</td>
                </tr>
                <tr>
                  <td>${_`MA`}</td>
                  <td>${_`Madhyamāgama`}</td>
                </tr>
                <tr>
                  <td>${_`Mg`}</td>
                  <td>${_`Mahāsaṅghika`}</td>
                </tr>
                <tr>
                  <td>${_`Mh`}</td>
                  <td>${_`Mahāsūtras`}</td>
                </tr>
                <tr>
                  <td>${_`Mhvs`}</td>
                  <td>${_`Mahāvaṁsa`}</td>
                </tr>
                <tr>
                  <td>${_`Mi`}</td>
                  <td>${_`Mahīśasaka`}</td>
                </tr>
                <tr>
                  <td>${_`Mil`}</td>
                  <td>${_`Milindapañha`}</td>
                </tr>
                <tr>
                  <td>${_`MN`}</td>
                  <td>${_`Majjhima Nikāya`}</td>
                </tr>
                <tr>
                  <td>${_`Mpt`}</td>
                  <td>${_`Mahāvyutpatti`}</td>
                </tr>
                <tr>
                  <td>${_`Ms`}</td>
                  <td>${_`Mahasaṅgīti Tipiṭaka`}</td>
                </tr>
                <tr>
                  <td>${_`Mu`}</td>
                  <td>${_`Mūlasarvāstivāda`}</td>
                </tr>
                <tr>
                  <td>${_`Mvu`}</td>
                  <td>${_`Mahāvastu`}</td>
                </tr>
                <tr>
                  <td>${_`Nd`}</td>
                  <td>${_`Niddesa`}</td>
                </tr>
                <tr>
                  <td>${_`Ne`}</td>
                  <td>${_`Nettipakaraṇa`}</td>
                </tr>
                <tr>
                  <td>${_`NP`}</td>
                  <td>${_`Nissaggiya Pācittiya`}</td>
                </tr>
                <tr>
                  <td>${_`OA`}</td>
                  <td>${_`Other Āgama`}</td>
                </tr>
                <tr>
                  <td>${_`Other T`}</td>
                  <td>${_`Other Taishō`}</td>
                </tr>
                <tr>
                  <td>${_`OM`}</td>
                  <td>${_`Other Mātikā`}</td>
                </tr>
                <tr>
                  <td>${_`P`}</td>
                  <td>${_`page`}</td>
                </tr>
                <tr>
                  <td>${_`Pc`}</td>
                  <td>${_`Pācittiya`}</td>
                </tr>
                <tr>
                  <td>${_`Pd`}</td>
                  <td>${_`Pātidesanīya`}</td>
                </tr>
                <tr>
                  <td>${_`Pdhp`}</td>
                  <td>${_`Patna Dharmapada`}</td>
                </tr>
                <tr>
                  <td>${_`Pe`}</td>
                  <td>${_`Peṭakopadesa`}</td>
                </tr>
                <tr>
                  <td>${_`Pf`}</td>
                  <td>${_`Prakrit fragment`}</td>
                </tr>
                <tr>
                  <td>${_`Pj`}</td>
                  <td>${_`Pārājika`}</td>
                </tr>
                <tr>
                  <td>${_`Pk`}</td>
                  <td>${_`Prakaraṇapada`}</td>
                </tr>
                <tr>
                  <td>${_`Pm`}</td>
                  <td>${_`Pātimokkha`}</td>
                </tr>
                <tr>
                  <td>${_`Pn`}</td>
                  <td>${_`Pakiṇṇaka`}</td>
                </tr>
                <tr>
                  <td>${_`Pp`}</td>
                  <td>${_`Puggalapaññatti`}</td>
                </tr>
                <tr>
                  <td>${_`Pr`}</td>
                  <td>${_`Prākrit`}</td>
                </tr>
                <tr>
                  <td>${_`Pr`}</td>
                  <td>${_`Prajnaptiśāstra`}</td>
                </tr>
                <tr>
                  <td>${_`Pvr`}</td>
                  <td>${_`Parivāra`}</td>
                </tr>
                <tr>
                  <td>${_`Patthana`}</td>
                  <td>${_`Paṭṭhāna`}</td>
                </tr>
                <tr>
                  <td>${_`Pts`}</td>
                  <td>${_`Paṭisambhidāmagga`}</td>
                </tr>
                <tr>
                  <td>${_`Pu`}</td>
                  <td>${_`Puggalavāda`}</td>
                </tr>
                <tr>
                  <td>${_`Pv`}</td>
                  <td>${_`Petavatthu`}</td>
                </tr>
                <tr>
                  <td>${_`Q`}</td>
                  <td>${_`Qianlong (Peking edition of Tibetan canon)`}</td>
                </tr>
                <tr>
                  <td>${_`SA`}</td>
                  <td>${_`Saṁyuktāgama`}</td>
                </tr>
                <tr>
                  <td>${_`SA2`}</td>
                  <td>${_`2nd Saṁyuktāgama`}</td>
                </tr>
                <tr>
                  <td>${_`SA3`}</td>
                  <td>${_`3rd Saṁyuktāgama`}</td>
                </tr>
                <tr>
                  <td>${_`Sab`}</td>
                  <td>${_`Śāriputrābhidharma`}</td>
                </tr>
                <tr>
                  <td>${_`Sammitiya`}</td>
                  <td>${_`Saṁmitīya Śāstra`}</td>
                </tr>
                <tr>
                  <td>${_`Sb`}</td>
                  <td>${_`Saṅghabhedavastu`}</td>
                </tr>
                <tr>
                  <td>${_`SC`}</td>
                  <td>${_`SuttaCentral`}</td>
                </tr>
                <tr>
                  <td>${_`Sf`}</td>
                  <td>${_`Sanskrit fragment`}</td>
                </tr>
                <tr>
                  <td>${_`Sg`}</td>
                  <td>${_`Saṅgītiparyāya`}</td>
                </tr>
                <tr>
                  <td>${_`SHT`}</td>
                  <td>${_`Sanskrithandschriften aus den Turfanfunden`}</td>
                </tr>
                <tr>
                  <td>${_`Sk`}</td>
                  <td>${_`Sekhiya`}</td>
                </tr>
                <tr>
                  <td>${_`SN`}</td>
                  <td>${_`Saṁyutta Nikāya`}</td>
                </tr>
                <tr>
                  <td>${_`Snp`}</td>
                  <td>${_`Suttanipāta`}</td>
                </tr>
                <tr>
                  <td>${_`Spp`}</td>
                  <td>${_`Śāriputraparipṛcchā`}</td>
                </tr>
                <tr>
                  <td>${_`Ss`}</td>
                  <td>${_`Saṅghādisesa`}</td>
                </tr>
                <tr>
                  <td>${_`Su`}</td>
                  <td>${_`Sutta/sūtra`}</td>
                </tr>
                <tr>
                  <td>${_`Sarv`}</td>
                  <td>${_`Sarvāstivāda`}</td>
                </tr>
                <tr>
                  <td>${_`T`}</td>
                  <td>${_`Taishō Shinshu Daizōkyō`}</td>
                </tr>
                <tr>
                  <td>${_`Tc`}</td>
                  <td>${_`Tibetan Critical editions`}</td>
                </tr>
                <tr>
                  <td>${_`Tf`}</td>
                  <td>${_`Turfan`}</td>
                </tr>
                <tr>
                  <td>${_`Tha-ap`}</td>
                  <td>${_`Thera Apadana`}</td>
                </tr>
                <tr>
                  <td>${_`Thag`}</td>
                  <td>${_`Theragāthā`}</td>
                </tr>
                <tr>
                  <td>${_`Thi-ap`}</td>
                  <td>${_`Therī Apadana`}</td>
                </tr>
                <tr>
                  <td>${_`Thig`}</td>
                  <td>${_`Therīgāthā`}</td>
                </tr>
                <tr>
                  <td>${_`Tl`}</td>
                  <td>${_`Thullaccaya`}</td>
                </tr>
                <tr>
                  <td>${_`Tv`}</td>
                  <td>${_`Theravāda`}</td>
                </tr>
                <tr>
                  <td>${_`Ud`}</td>
                  <td>${_`Udāna`}</td>
                </tr>
                <tr>
                  <td>${_`Uf`}</td>
                  <td>${_`Uighur fragment`}</td>
                </tr>
                <tr>
                  <td>${_`Up`}</td>
                  <td>${_`Abhidharmakośopayikanāmaṭīkā (Upāyika)`}</td>
                </tr>
                <tr>
                  <td>${_`Upp`}</td>
                  <td>${_`Upaliparipṛcchā`}</td>
                </tr>
                <tr>
                  <td>${_`Utg`}</td>
                  <td>${_`Uttaragantha`}</td>
                </tr>
                <tr>
                  <td>${_`Vb`}</td>
                  <td>${_`Vibhaṅga`}</td>
                </tr>
                <tr>
                  <td>${_`VE`}</td>
                  <td>${_`Vinaya Ekottara`}</td>
                </tr>
                <tr>
                  <td>${_`Vin`}</td>
                  <td>${_`Vinaya`}</td>
                </tr>
                <tr>
                  <td>${_`Vk`}</td>
                  <td>${_`Vijñānakāya`}</td>
                </tr>
                <tr>
                  <td>${_`Vns`}</td>
                  <td>${_`Vinayanidānasūtra`}</td>
                </tr>
                <tr>
                  <td>${_`Vol`}</td>
                  <td>${_`volume`}</td>
                </tr>
                <tr>
                  <td>${_`VS`}</td>
                  <td>${_`(Vinaya) Saṁyutta`}</td>
                </tr>
                <tr>
                  <td>${_`Vv`}</td>
                  <td>${_`Vimānavatthu`}</td>
                </tr>
                <tr>
                  <td>${_`WP`}</td>
                  <td>${_`Wisdom Publications`}</td>
                </tr>
                <tr>
                  <td>${_`Ya`}</td>
                  <td>${_`Yamaka`}</td>
                </tr>
                <tr>
                  <td>${_`Ybs`}</td>
                  <td>${_`Yogācārabhūmi`}</td>
                </tr>
              </table>
            </article>
          </section>
        </main>
      </div>
    `;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/static_abbreviations-page';
  }
}

customElements.define('sc-abbreviations-page', SCAbbreviationsPage);
