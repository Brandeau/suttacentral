import { html } from 'lit';

import { layoutSimpleStyles } from '../styles/sc-layout-simple-styles.js';
import { typographyCommonStyles } from '../styles/sc-typography-common-styles.js';
import { typographyStaticStyles } from '../styles/sc-typography-static-styles.js';
import { SCStaticPage } from '../addons/sc-static-page.js';
import _ from '../../localization/macro.js';

class SCDonationsPage extends SCStaticPage {
  render() {
    return html`
      <style>
        ${layoutSimpleStyles}
        ${typographyCommonStyles}
        ${typographyStaticStyles}
      </style>
      <style>
        .donate-button {
          background: var(--sc-primary-accent-color);
          color: var(--sc-tertiary-text-color);
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: var(--sc-caps-letter-spacing);
        }

        .donate-link {
          background: none;
          margin: var(--sc-size-xxl) 0;
          text-decoration: none;
        }

        .donations-button {
          display: flex;
          justify-content: center;
        }

        .account-data td {
          padding-right: var(--sc-size-md);
        }
      </style>
      <div id="page-wrap">
        <main>
          <section>
            <article>
              <h1>${_`SuttaCentral Donations`}</h1>
              <p>
                ${_`Your donation is greatly appreciated. It will support the ongoing development of SuttaCentral so we can continue to bring the Buddha’s word to people all around the world.`}
              </p>
              <div class="donations-button">${_`Donate`}</div>
              <h2>${_`What does SuttaCentral spend money on?`}</h2>
              <ul>
                <li>
                  ${_`IT development: we employ professional programmers in addition to volunteers.`}
                </li>
                <li>${_`Servers: costs of servers and other infrastructure.`}</li>
                <li>
                  ${_`Hardware: computer and other hardware for workers on SC, especially monastics.`}
                </li>
                <li>${_`Other`}</li>
              </ul>
              <h2>${_`Ethical banking`}</h2>
              <p>
                ${_`SuttaCentral Development Trust uses <a href="https://www.communitysectorbanking.com.au/" rel="noopener" target="_blank">Adelaide Bendigo community sector banking</a>, which has ethical and green investment policies. <a href="https://www.climatecouncil.org.au/what-you-need-to-know-about-fossil-fuel-divestment" rel="noopener" target="_blank">Bendigo Bank has publicly divested from fossil fuels</a>.`}
              </p>
              <table class="account-data">
                <tr>
                  <td>${_`Account name`}</td>
                  <td>${_`SuttaCentral Development Trust`}</td>
                </tr>
                <tr>
                  <td>${_`Bank name`}</td>
                  <td>${_`Adelaide Bendigo Community Sector Banking`}</td>
                </tr>
                <tr>
                  <td>${_`BSB`}</td>
                  <td>${_`633 000`}</td>
                </tr>
                <tr>
                  <td>${_`Account no.`}</td>
                  <td>${_`154500086`}</td>
                </tr>
                <tr>
                  <td>${_`Address`}</td>
                  <td>${_`1273 Pacific Highway, Turramurra NSW 2074`}</td>
                </tr>
                <tr>
                  <td>${_`Swift code`}</td>
                  <td>${_`BENDAU3B`}</td>
                </tr>
              </table>
              <p>
                ${_`For any questions, please contact our financial officer, Deepika Weerakoon (suttacentraldevelopmenttrust@gmail.com). Deepika manages the funds on behalf of SuttaCentral Development Trust.`}
              </p>
              <h2>${_`SuttaCentral Development Trust`}</h2>
              <p>
                ${_`The SuttaCentral Development Trust is a charitable trust. The founding members of the trust are Bhante Sujato, Bhante Brahmali, and John Kelly. The trust is managed by Deepika Weerakoon.`}
              </p>
              <p>
                ${_`The accountants and auditors of the Trust are <a href="http://www.alwisco.com.au" rel="noopener" target="_blank">Randolph Alwis &amp; Co Pty Ltd</a>. The <a href="https://abr.business.gov.au/SearchByAbn.aspx?SearchText=858%20188%2075744" rel="noopener" target="_blank">ABN is 858 188 75744</a>.`}
              </p>
              <p>
                ${_`Financial details of the trust are available if you have any inquiries. The Trust was created solely to support the development of SuttaCentral. All funds in the Trust will be solely spent on SuttaCentral, and none on trust administration, which is being managed by volunteers.`}
              </p>
            </article>
          </section>
        </main>
      </div>
    `;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/interface';
  }
}

customElements.define('sc-donations-page', SCDonationsPage);
