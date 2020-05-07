import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { staticStyles } from '../styles/static-styles.js';
import { SCStaticPage } from '../addons/sc-static-page.js';


class SCStart extends SCStaticPage {
  render() {
    return html`
    ${staticStyles}
      <main>
          <article>
            <h1>
              ${this.localize('bf647454e36069fd16f1a7a35cf6a865')}
            </h1>
            <p>
              ${this.localize('5b7b920de41da5d9441b0e71fbe6fa63')}
            </p>
            <blockquote class="gatha">
              <p>
                ${unsafeHTML(this.localize('4fccb495669a0a17c771d89045caed40'))}
              </p>
            </blockquote>
            <p>
              ${this.localize('c193f00c4de6db3c1d7664e9803c366e')}
            </p>
            <h2>
              ${this.localize('b7f4228ab13067f8e7d3b3f691c3a3ef')}
            </h2>
            <p>
              ${this.localize('2b00d8a93027e9a5c835e2c470cc95d3')}
            </p>
            <ul>
              <li>
                ${unsafeHTML(this.localize('cc1123576687f3266470bbe4077cf591'))}
              </li>
              <li>
                ${unsafeHTML(this.localize('360f723179f73a76835fe1a0147e0523'))}
              </li>
              <li>
                ${unsafeHTML(this.localize('8bfc237aa0b9d1e655adda22742578e3'))}
              </li>
              <li>
                ${unsafeHTML(this.localize('fc38d564e187284a7cbca761ce2ea05d'))}
              </li>
            </ul>
            <h2>
              ${this.localize('da486f01c76bee128fef5d5090168ce6')}
            </h2>
            <p>
              ${this.localize('207531706465e14033bb7388ea4f305f')}
            </p>
            <ul>
              <li>
                ${unsafeHTML(this.localize('a605fb63e7c70b43259cd537133d0bdf'))}
              </li>
              <li>
                ${unsafeHTML(this.localize('7f080a6c1696fa9253cc00dd0a5bf017'))}
              </li>
              <li>
                ${unsafeHTML(this.localize('292ad2157b579a941523f42df1f6adc3'))}
              </li>
              <li>
                ${unsafeHTML(this.localize('a7236f142af50f9b834a5df519b564d0'))}
              </li>
            </ul>
            <h2>
              ${this.localize('7245023e107f7a6f2a625c1cdb388b63')}
            </h2>
            <p>
              ${this.localize('2d5ac0e1d879d50d69edbeac3cd150e8')}
            </p>
            <ul>
              <li>
                ${unsafeHTML(this.localize('9bcdaa0bc6a8faa7e9583df6e196c35a'))}
              </li>
              <li>
                ${unsafeHTML(this.localize('1f3b1a4ecc6553959c5ecc820c01fd56'))}
              </li>
              <li>
                ${unsafeHTML(this.localize('182ff313de35e5bd8e4e26e1853508d5'))}
              </li>
            </ul>
            <h2>
              ${this.localize('cd56198f0768e84cfc40a120e02f796d')}
            </h2>
            <p>
              ${this.localize('6f73eabae4d37563d42d1a02331afc54')}
            </p>
            <p>
              ${this.localize('481f9ed1b1450ec83d42f430e3e9f012')}
            </p>
            <h2>
              ${this.localize('bdf47b4cb4954819d238f60ca2edb579')}
            </h2>
            <p>
              ${unsafeHTML(this.localize('c606f16295836d2b17dc4f749913ff97'))}
            </p>
            <h2>
              ${this.localize('c5cf897ac4549f6a6e80900f52a0b13c')}
            </h2>
            <p>
              ${this.localize('bacd98544bd820c4e32e81797baa4621')}
            </p>
            <p>
              ${this.localize('32070e2961989210491f68c69ae90e71')}
            </p>
            <h2>
              ${this.localize('ac703e1e04b5438e9a5c6d840fefa6e9')}
            </h2>
            <p>
              ${unsafeHTML(this.localize('9992f0d8b5a13651684f890f0ced9046'))}
            </p>
          </article>
      </main>`;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/static_start-page';
  }
}

customElements.define('sc-start', SCStart);