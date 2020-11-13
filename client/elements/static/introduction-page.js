import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { layoutSimpleStyles } from '../styles/sc-layout-simple-styles.js';
import { typographyCommonStyles } from '../styles/sc-typography-common-styles.js';
import { typographyStaticStyles } from '../styles/sc-typography-static-styles.js';
import { SCStaticPage } from '../addons/sc-static-page.js';


class SCIntroduction extends SCStaticPage {
  render() {
    return html`
      <style> 
        ${layoutSimpleStyles}
        ${typographyCommonStyles}
        ${typographyStaticStyles}
      </style>
      <main>
          <article>
          <h1>
            ${this.localize('8a5771a60dd94ca37583950ad022accc')}
          </h1>
          <h2>
            ${this.localize('f7a4bed17a4fb66b6265c58fd2aef562')}
          </h2>
          <p>
            ${this.localize('075042e8f0218630c1c81f34bda77f67')}
          </p>
          <p>
            ${unsafeHTML(this.localize('131b33955b1520bc018ddfb20e14dd0a'))}
          </p>
          <p>
            ${this.localize('64cd2e478659db49f887dae97da862c3')}
          </p>
          <picture>
            <source srcset="/img/static-pages/Life_of_Buddha_Burmese_Manuscript_22_Volume_1_Wellcom.avif" type="image/avif">
            <img alt="${this.localize('025257a3215157ee4626b3cb6e483c94')}" class="image-home-full" src="/img/static-pages/Life_of_Buddha_Burmese_Manuscript_22_Volume_1_Wellcom.jpg" title="${this.localize('d9b4df8b039c324a4b8e7f98426f2455')}" width="640px">
          </picture>
          <h2>
            ${this.localize('83915d1254927f41241e8630890bec6e')}
          </h2>
          <p>
            ${this.localize('15ffb98686cd6b652bfe8a518383ebb9')}
          </p>
          <p>
            ${this.localize('71eea109c3638e4d23850f291af6d625')}
          </p>
          <p>
            ${this.localize('5861ff63b6621d7716d629b1b5072276')}
          </p>
          <h2>
            ${this.localize('f15c1cae7882448b3fb0404682e17e61')}
          </h2>
          <p>
            <picture>
              <source srcset="/img/static-pages/birchbark_w400.avif" type="image/avif">
              <img alt="${this.localize('46d831f3bb74892e53c4603434e46e40')}" class="image-home" src="/img/static-pages/birchbark_w400.jpg" title="${this.localize('b6e60cfe55a01b89e5fb3e3918783055')}">
            </picture>
            ${this.localize('eefafa4d2d7214360b1103762d9f04eb')}
            <i lang="pi">
              ${this.localize('5679d17143f5ef20067c5dde94d6986b')}
            </i>
            ${this.localize('98ca593be0b0d2598d0ec1e308ed36f6')}
            <i lang="san">
              ${this.localize('9695d59932a2396d75722a56e5c78915')}
            </i>
            ${this.localize('33a30586e1f125c7e5f8d1d6c9dfd3ad')}
          </p>
          <ul>
            <li>
              ${unsafeHTML(this.localize('39fae9d4c4048895ae95f51d80695131'))}
            </li>
            <li>
              ${unsafeHTML(this.localize('9da794ac3c06b50ec3eff803fc80660f'))}
            </li>
            <li>
              ${unsafeHTML(this.localize('8554654205a0d63220670531cffe0d2f'))}
            </li>
          </ul>
          <p>
            ${this.localize('43a73e28df345d8a7a9c1adcb8310c39')}
          </p>
          <p>
            ${unsafeHTML(this.localize('643bd5803585db74ebe66395de562ba8'))}
          </p>
          <p>
            ${this.localize('d66102e39caea50fb2107ea0a22eafd9')}
          </p>
          <ul>
            <li>
              <strong>
                ${this.localize('a2cdeec407ec5ce6951f5c04167cee82')}
              </strong>
              ${this.localize('c43bf4ac612f386a1bc6ba0ce9597618')}
              <ul>
                <li>
                  ${unsafeHTML(this.localize('a2bff1f7a93e842c879822868c275608'))}
                </li>
                <li>
                  ${unsafeHTML(this.localize('22675d5c401a9031b416c4277e7308cf'))}
                </li>
                <li>
                  ${unsafeHTML(this.localize('c08e3459f7f584dd77eb4602f84106c4'))}
                </li>
                <li>
                  ${unsafeHTML(this.localize('2cabfbfe1d25ebcd37cd0a51fecb5b8f'))}
                </li>
              </ul>
            </li>
            <li>
              ${unsafeHTML(this.localize('23bf0ba03a8d83a26684c7329cb754a9'))}
            </li>
            <li>
              ${unsafeHTML(this.localize('47e7910456926370638348010d11acaa'))}
            </li>
          </ul>
          <h2>
            ${this.localize('e109705703e0324d1a5de1d84a3a8951')}
          </h2>
          <p>
            <picture>
              <source srcset="/img/static-pages/dn20.avif" type="image/avif">
              <img alt="${this.localize('48b65b4ddc298706957757b9d1084047')}" class="image-home" src="/img/static-pages/dn20.jpg" title="${this.localize('4876141d1d5c276e672a3bf35f732208')}" width="640px">
            </picture>
            ${this.localize('3145680918ffae0d7b0932b712b36884')}
          </p>
          <p>
            ${unsafeHTML(this.localize('be6160c8e166154d0239ea1b6c6de837'))}
          </p>
          <p>
            ${this.localize('2f8486687fac43e883d0b1d169e4c520')}
          </p>
          <h2>
            ${this.localize('fe976ba5d001a4b8eb12abf41b2bf85d')}
          </h2>
          <p>
            ${this.localize('d20bc7653b47c1618a9a13fec3499850')}
          </p>
          <h3>
            ${this.localize('288a19053753d36a9d75550d2e19b6e7')}
          </h3>
          <p>
            ${this.localize('020b55c72f46d16ebbd54ee8052963b0')}
          </p>
          <h4>
            ${this.localize('d732b14d12264117649c3ff382cd2674')}
          </h4>
          <p>
            ${unsafeHTML(this.localize('104de210c8b78906d9ed39cb16c7bec7'))}
          </p>
          <p>
            ${unsafeHTML(this.localize('5a0d06db2d5f1d743ed54f7ab0d1bef7'))}
          </p>
          <h4>
            ${this.localize('5cab32da4acdfa1c0eb326ef5813513d')}
          </h4>
          <p>
            ${unsafeHTML(this.localize('424c65b5fd3b67ac77cf8b86bfc4e946'))}
          </p>
          <h4>
            ${this.localize('416938bc8df7392bc863536f29144884')}
          </h4>
          <p>
            ${unsafeHTML(this.localize('807a830efca84157451305a4bbbe861a'))}
          </p>
          <h3>
            ${this.localize('219ff7705d67d0c798779951dcf82e95')}
          </h3>
          <p>
            ${unsafeHTML(this.localize('e49fa2c20696ee9cab100771758123e5'))}
          </p>
          <h4>
            ${this.localize('e30baf2773fd1ff10ac21a7ebd63198d')}
          </h4>
          <p>
            ${unsafeHTML(this.localize('ce1f85a694b279a9e795e1c9e9cb6a6b'))}
          </p>
          <p>
            ${this.localize('0a3e6ff4168e989545e373ecf9c1daca')}
          </p>
          <p>
            ${unsafeHTML(this.localize('66e911b51ebf80851534c77e5ede8f44'))}
          </p>
          <h4>
            ${this.localize('fb17756a295bcd7fd0a5fd3ce105dad8')}
          </h4>
          <p>
            ${this.localize('5cc46fae150cbf10bfef464b80e21c0f')}
          </p>
          <p>
            ${this.localize('8d9e1381a11dd10621fc2f61f710f802')}
          </p>
          <ul>
            <li>
              ${unsafeHTML(this.localize('12ea3c3cdd2c84d9414d8fc9ac0b3163'))}
            </li>
            <li>
              ${unsafeHTML(this.localize('2d294546e6adca141f6f49c8cc33184f'))}
            </li>
            <li>
              ${unsafeHTML(this.localize('88d3f6eb7b94c5168d53d510df297815'))}
            </li>
          </ul>
          <p>
            ${this.localize('f561ab7275f123d7012dcb651797a538')}
          </p>
          <h4>
            ${this.localize('ff9331ad058b3717457b73d2bdc51534')}
          </h4>
          <p>
            ${unsafeHTML(this.localize('cbfe471b1d493062f2d1ebe4f3c93948'))}
          </p>
          <h3>
            ${this.localize('098e5e580116861f2e90aa1b3ff3f8d4')}
          </h3>
          <p>
            ${this.localize('947f618cde49b0003c7c8731dcbc0b33')}
          </p>
          <p>
            ${unsafeHTML(this.localize('c85494b45f76fe30a1b83de36d7b4c91'))}
          </p>
          <h3>
            ${this.localize('77e3d5b1fa94310051c8e2ef1f66dd42')}
          </h3>
          <p>
            ${this.localize('93b6d07d99b8aa67b0357d1bbec517c1')}
          </p>
          <p>
            ${this.localize('f0f0a7e3e922592e4db404f854eec3c6')}
          </p>
          </article>
      </main>`;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/static_introduction-page';
  }
}

customElements.define('sc-introduction', SCIntroduction);