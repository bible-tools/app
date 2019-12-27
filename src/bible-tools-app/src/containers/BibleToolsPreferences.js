import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'

import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import '@material/mwc-formfield'
import '@material/mwc-radio'

import { loadLanguage, loadReference, loadVersion } from '../dispatchers/dispatchers'

import { enableTheme, getThemeFromStorage } from '../components/BibleToolsTheme'

export class BibleToolsPreferences extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        text-align: center;
      }

      .theme section {
        width: 100%;
      }

      .versions {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
      }

      .versions section {
        flex: auto;
        width: 7rem;
      }
    `
  }

  static get properties() {
    return {
      language: {
        reflect: false,
        type: String
      },
      version: {
        reflect: false,
        type: String
      }
    }
  }

  constructor() {
    super()

    this.language = 'en'
    this.version = 'KJV'
  }

  _handleThemeChange(target) {
    enableTheme(target.getAttribute('theme'))
  }

  _handleTranslationChange(target) {
    const language = target.getAttribute('language')
    const version = target.getAttribute('version')
    console.log(1, language, version)


    loadLanguage(language)
    loadVersion(version)
    loadReference(language, version)

    this.language = language
    this.version = version
  }

  stateChanged(state) {
    this.language = state.translation.language.current
    this.version = state.translation.version.current
  }

  render() {
    const theme = getThemeFromStorage()

    return html`
      <div>
        <h2>Theme</h2>

        <div class="theme">
          <section>
            <mwc-formfield label="Dark" @change=${e => this._handleThemeChange(e.target)}>
              <mwc-radio name="theme" theme="dark" ?checked=${theme === 'dark'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="Light" @change=${e => this._handleThemeChange(e.target)}>
              <mwc-radio name="theme" theme="light" ?checked=${theme === 'light'}></mwc-radio>
            </mwc-formfield>
          </section>
        </div>

        <h2>Translation</h2>

        <div class="versions">
          <section>
            <h3>English</h3>
            <mwc-formfield label="KJV" @change=${e => this._handleTranslationChange(e.target)}>
              <mwc-radio name="version" language="en" version="KJV" ?checked=${this.language === 'en' &&
                this.version === 'KJV'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="ASV" @change=${e => this._handleTranslationChange(e.target)}>
              <mwc-radio name="version" language="en" version="ASV" ?checked=${this.language === 'en' &&
                this.version === 'ASV'}></mwc-radio>
            </mwc-formfield>
          </section>
          <section>
            <h3>French</h3>
            <mwc-formfield label="FreSegond" @change=${e => this._handleTranslationChange(e.target)}>
              <mwc-radio name="version" language="fr" version="FreSegond" ?checked=${this.language === 'fr' &&
                this.version === 'FreSegond'}></mwc-radio>
            </mwc-formfield>
          </section>
          <section>
            <h3>German</h3>
            <mwc-formfield label="GerElb1905" @change=${e => this._handleTranslationChange(e.target)}>
              <mwc-radio name="version" language="de" version="GerElb1905" ?checked=${this.language === 'de' &&
                this.version === 'GerElb1905'}></mwc-radio>
            </mwc-formfield>
          </section>
          <section>
            <h3>Spanish </h3>
            <mwc-formfield label="SpaRV" @change=${e => this._handleTranslationChange(e.target)}>
              <mwc-radio name="version" language="es" version="SpaRV" ?checked=${this.language === 'es' &&
                this.version === 'SpaRV'}></mwc-radio>
            </mwc-formfield>
          </section>
        </div>
      </div>
    `
  }
}

defineCustomElement('bible-tools-preferences', BibleToolsPreferences)
