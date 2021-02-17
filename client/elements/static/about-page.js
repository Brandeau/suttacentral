import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { layoutSimpleStyles } from '../styles/sc-layout-simple-styles.js';
import { typographyCommonStyles } from '../styles/sc-typography-common-styles.js';
import { typographyStaticStyles } from '../styles/sc-typography-static-styles.js';
import { SCStaticPage } from '../addons/sc-static-page.js';

class SCAboutPage extends SCStaticPage {
  render() {
    return html`
      <style>
        ${layoutSimpleStyles}
        ${typographyCommonStyles}
        ${typographyStaticStyles}
      </style>
      <main>
        <article>
          <h1>${this.localize('55d139c73398413f27c7e15a4cad3a59')}</h1>
          <p>${this.localize('43c1abba8207309efd6799a3a7011ff7')}</p>
          <p>${this.localize('0e5c6c307a41274b2d6770164f0a82cb')}</p>
          <p>${this.localize('472d2708a4d2c1bb61927b952d555f6c')}</p>
          <p>${this.localize('2923d6f291c43d749c0476a7f1c6ab34')}</p>
          <p>${unsafeHTML(this.localize('0b7d30e53b1e5443951598ca356322cd'))}</p>
          <h2>${this.localize('7d7ecfc5a78d4287f72b459e973c472c')}</h2>
          <p>${this.localize('cf6137f06caf2b738caa0cd89612f3ec')}</p>
        </article>
      </main>
    `;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/static_about-page';
  }
}

customElements.define('sc-about-page', SCAboutPage);
