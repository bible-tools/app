import { LitElement, css, html } from 'lit-element'
import { defineCustomElement, getFontSizeFromString } from '../utilities'

import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import '@material/mwc-formfield'
import '@material/mwc-radio'
import '@material/mwc-slider'

import {
  loadLanguage,
  loadReference,
  loadVersion,
  setReaderFontStyle,
  setReaderTextAlign,
  setReaderVerseDisplay,
  setSiteBrandPath,
  setSiteTitle,
} from '../dispatchers/dispatchers'

import { enableTheme, getThemeFromStorage } from '../components/BibleToolsTheme'

export class BibleToolsPreferences extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        text-align: center;
      }

      .preferences {
        margin: auto;
        max-width: 37.5rem;
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
      fontSize: {
        reflect: false,
        type: Number
      },
      language: {
        reflect: false,
        type: String
      },
      shouldDisplayVerseNumbers: {
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

    setSiteTitle('Preferences')
    setSiteBrandPath('preferences')
  }

  _handleFontSizeChange(target) {
    if (this.fontSize !== target.value) {
      setReaderFontStyle(`normal ${target.value}px san-serif`)

      this.fontSize = target.value
    }
  }

  _handleTextAlignChange(target) {
    if (this.textAlign !== target.value) {
      setReaderTextAlign(target.value)

      this.textAlign = target.value
    }
  }

  _handleTranslationChange(target) {
    const language = target.getAttribute('language')
    const version = target.getAttribute('version')

    loadLanguage(language)
    loadVersion(version)
    loadReference(language, version)

    this.language = language
    this.version = version
  }

  stateChanged(state) {
    const fontSize = getFontSizeFromString(state.preferences.fontStyle)
    if (fontSize && this.fontSize !== fontSize) {
      this.fontSize = fontSize
    }

    this.shouldDisplayVerseNumbers = state.preferences.shouldDisplayVerseNumbers
    this.textAlign = state.preferences.textAlign
    this.language = state.translation.language.current
    this.version = state.translation.version.current
  }

  render() {
    const theme = getThemeFromStorage()

    return html`
      <div class="preferences">
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

        <h2>Display</h2>

        <div class="theme">
          <section>
            <h3>Theme</h3>

            <mwc-formfield label="Dark" @change=${e => enableTheme(e.target.value)}>
              <mwc-radio name="theme" value="dark" ?checked=${theme === 'dark'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="Light" @change=${e => enableTheme(e.target.value)}>
              <mwc-radio name="theme" value="light" ?checked=${theme === 'light'}></mwc-radio>
            </mwc-formfield>
          </section>
        </div>

        <div>
          <section>
            <h3>Font</h3>

            <mwc-formfield label="Size">
              <mwc-slider pin="" markers="" min="10" max="32" value=${this.fontSize} step="2" @change=${e => this._handleFontSizeChange(e.target)}></mwc-slider>
            </mwc-formfield>
          </section>

          <section>
            <h3>Verse Numbers</h3>

            <mwc-formfield label="Yes" @change=${e => setReaderVerseDisplay(e.target.value)}>
              <mwc-radio name="shouldDisplayVerseNumbers" value="yes" ?checked=${this.shouldDisplayVerseNumbers === 'yes'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="No" @change=${e => setReaderVerseDisplay(e.target.value)}>
              <mwc-radio name="shouldDisplayVerseNumbers" value="no" ?checked=${this.shouldDisplayVerseNumbers === 'no'}></mwc-radio>
            </mwc-formfield>
          </section>

          <section>
            <h3>Text Alignment</h3>

            <mwc-formfield label="Left" @change=${e => this._handleTextAlignChange(e.target)}>
              <mwc-radio name="textAlign" value="left" ?checked=${this.textAlign === 'left'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="Center" @change=${e => this._handleTextAlignChange(e.target)}>
              <mwc-radio name="textAlign" value="center" ?checked=${this.textAlign === 'center'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="Justify" @change=${e => this._handleTextAlignChange(e.target)}>
              <mwc-radio name="textAlign" value="justify" ?checked=${this.textAlign === 'justify'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="Right" @change=${e => this._handleTextAlignChange(e.target)}>
              <mwc-radio name="textAlign" value="right" ?checked=${this.textAlign === 'right'}></mwc-radio>
            </mwc-formfield>
          </section>
        </div>
      </div>
    `
  }
}

defineCustomElement('bible-tools-preferences', BibleToolsPreferences)
