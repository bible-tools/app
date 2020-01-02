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
  setReaderLineBreak,
  setReaderTextAlign,
  setReaderTextDirection,
  setReaderVerseDisplay,
  setSiteBrandPath,
  setSiteTitle,
} from '../dispatchers/dispatchers'

import { enableTheme, getThemeFromStorage } from '../components/BibleToolsTheme'

export class BibleToolsPreferences extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        display: flex;
        margin-left: 5%;
        margin-right: 5%;
        text-align: center;
      }

      :host > section {
        margin: auto;
        max-width: 37.5rem;
      }

      :host > section > section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
      }

      :host > section > section > section {
        flex: auto;
        width: 7rem;
      }

      h2 {
        background-color: var(--bible-tools-preferences-h2-background-color);
        color: var(--bible-tools-preferences-h2-color);
      }
    `
  }

  static get properties() {
    return {
      fontSize: {
        reflect: false,
        type: Number
      },
      hasLineBreakAtVerse: {
        reflect: false,
        type: String
      },
      language: {
        reflect: false,
        type: String
      },
      shouldDisplayVerseNumbers: {
        reflect: false,
        type: String
      },
      textDirection: {
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

  _handleFontSizeChange(e) {
    e.preventDefault()

    const { value } = e.target

    if (this.fontSize !== value) {
      setReaderFontStyle(`normal ${value}px san-serif`)
    }
  }

  _handleTextAlignChange(e) {
    e.preventDefault()

    const { value } = e.target

    if (this.textAlign !== value) {
      setReaderTextAlign(value)
    }
  }

  _handleTextDirectionChange(e) {
    e.preventDefault()

    const { value } = e.target

    if (this.textDirection !== value) {
      setReaderTextDirection(value)
    }
  }

  _handleReaderLineBreakChange(e) {
    e.preventDefault()

    const { value } = e.target

    if (this.hasLineBreakAtVerse !== value) {
      setReaderLineBreak(value)
    }
  }

  _handleTranslationChange(e) {
    e.preventDefault()

    const language = e.target.getAttribute('language')
    const version = e.target.getAttribute('version')

    loadLanguage(language)
    loadVersion(version)
    loadReference(language, version)

    this.language = language
    this.version = version

    // override default preferences based on supported languages / features
    if (this.language === 'ar') {
      setReaderTextDirection('right')
      setReaderTextDirection('rtl')
      setReaderLineBreak('yes')

      setReaderVerseDisplay('no')
    } else {
      setReaderTextDirection('justify')
      setReaderTextDirection('ltr')
      setReaderLineBreak('no')

      setReaderVerseDisplay('yes')
    }
  }

  stateChanged(state) {
    const fontSize = getFontSizeFromString(state.preferences.fontStyle)
    if (fontSize && this.fontSize !== fontSize) {
      this.fontSize = fontSize
    }

    this.hasLineBreakAtVerse = state.preferences.hasLineBreakAtVerse
    this.language = state.translation.language.current
    this.shouldDisplayVerseNumbers = state.preferences.shouldDisplayVerseNumbers
    this.textAlign = state.preferences.textAlign
    this.textDirection = state.preferences.textDirection
    this.version = state.translation.version.current
  }

  render() {
    const theme = getThemeFromStorage()

    return html`
      <section>
        <h2>Translation</h2>

        <section>
          <section>
            <h3>Arabic</h3>
            <mwc-formfield label="AraSVD" @change=${e => this._handleTranslationChange(e)}>
              <mwc-radio name="version" language="ar" version="AraSVD" ?checked=${this.language === 'ar' &&
                this.version === 'AraSVD'}></mwc-radio>
            </mwc-formfield>
          </section>
          <section>
            <h3>English</h3>
            <mwc-formfield label="KJV" @change=${e => this._handleTranslationChange(e)}>
              <mwc-radio name="version" language="en" version="KJV" ?checked=${this.language === 'en' &&
                this.version === 'KJV'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="ASV" @change=${e => this._handleTranslationChange(e)}>
              <mwc-radio name="version" language="en" version="ASV" ?checked=${this.language === 'en' &&
                this.version === 'ASV'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="WEB" @change=${e => this._handleTranslationChange(e)}>
              <mwc-radio name="version" language="en" version="WEB" ?checked=${this.language === 'en' &&
                this.version === 'WEB'}></mwc-radio>
            </mwc-formfield>
          </section>
          <section>
            <h3>French</h3>
            <mwc-formfield label="FreSegond" @change=${e => this._handleTranslationChange(e)}>
              <mwc-radio name="version" language="fr" version="FreSegond" ?checked=${this.language === 'fr' &&
                this.version === 'FreSegond'}></mwc-radio>
            </mwc-formfield>
          </section>
          <section>
            <h3>German</h3>
            <mwc-formfield label="GerElb1905" @change=${e => this._handleTranslationChange(e)}>
              <mwc-radio name="version" language="de" version="GerElb1905" ?checked=${this.language === 'de' &&
                this.version === 'GerElb1905'}></mwc-radio>
            </mwc-formfield>
          </section>
          <section>
            <h3>Spanish </h3>
            <mwc-formfield label="SpaRV" @change=${e => this._handleTranslationChange(e)}>
              <mwc-radio name="version" language="es" version="SpaRV" ?checked=${this.language === 'es' &&
                this.version === 'SpaRV'}></mwc-radio>
            </mwc-formfield>
          </section>
        </section>

        <h2>Display</h2>

        <section>
          <section>
            <h3>Font</h3>

            <mwc-formfield label="Size">
              <mwc-slider pin="" markers="" min="10" max="32" value=${this.fontSize} step="2" @change=${e => this._handleFontSizeChange(e)}></mwc-slider>
            </mwc-formfield>
          </section>

          <section>
            <h3>Theme</h3>

            <mwc-formfield label="Dark" @change=${e => enableTheme(e.target.value)}>
              <mwc-radio name="theme" value="dark" ?checked=${theme === 'dark'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="Light" @change=${e => enableTheme(e.target.value)}>
              <mwc-radio name="theme" value="light" ?checked=${theme === 'light'}></mwc-radio>
            </mwc-formfield>
          </section>
        </section>

        <section>
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

            <mwc-formfield label="Left" @change=${e => this._handleTextAlignChange(e)}>
              <mwc-radio name="textAlign" value="left" ?checked=${this.textAlign === 'left'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="Center" @change=${e => this._handleTextAlignChange(e)}>
              <mwc-radio name="textAlign" value="center" ?checked=${this.textAlign === 'center'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="Justify" @change=${e => this._handleTextAlignChange(e)}>
              <mwc-radio name="textAlign" value="justify" ?checked=${this.textAlign === 'justify'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="Right" @change=${e => this._handleTextAlignChange(e)}>
              <mwc-radio name="textAlign" value="right" ?checked=${this.textAlign === 'right'}></mwc-radio>
            </mwc-formfield>
          </section>

          <section>
            <h3>Text Direction</h3>

            <mwc-formfield label="Left to Right" @change=${e => this._handleTextDirectionChange(e)}>
              <mwc-radio name="textDirection" value="ltr" ?checked=${this.textDirection === 'ltr'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="Right to Left" @change=${e => this._handleTextDirectionChange(e)}>
              <mwc-radio name="textDirection" value="rtl" ?checked=${this.textDirection === 'rtl'}></mwc-radio>
            </mwc-formfield>
          </section>

          <section>
            <h3>Line Break at Verse</h3>

            <mwc-formfield label="Yes" @change=${e => this._handleReaderLineBreakChange(e)}>
              <mwc-radio name="hasLineBreakAtVerse" value="yes" ?checked=${this.hasLineBreakAtVerse === 'yes'}></mwc-radio>
            </mwc-formfield>

            <mwc-formfield label="No" @change=${e => this._handleReaderLineBreakChange(e)}>
              <mwc-radio name="hasLineBreakAtVerse" value="no" ?checked=${this.hasLineBreakAtVerse === 'no'}></mwc-radio>
            </mwc-formfield>
          </section>
        </section>
      </section>
    `
  }
}

defineCustomElement('bible-tools-preferences', BibleToolsPreferences)
