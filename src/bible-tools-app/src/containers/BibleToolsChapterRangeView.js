import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'

import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import '../components/BibleToolsSingleChapterRange'
import '../components/BibleToolsSingleVerse'
import './BibleToolsChapterNavigator'

import { getFontSizeFromString } from '../utilities'

export class BibleToolsChapterRangeView extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        display: flex;

        padding-top: 1rem;
      }

      header {
        font-size: var(
          --bible-tools-content-header-font-size,
          --bible-tools-content-single-post-header-font-size,
          1.5rem
        );

        padding-bottom: 1rem;
        text-align: center;
      }

      .verseNotFound {
        text-align: center;
        width: 100%;
      }

      /* xs, extra-small: 0px */
      @media (min-width: 0px) {
        bible-tools-single-chapter-range {
          max-width: 90%;
        }
      }

      /* sm, small: 600px */
      @media (min-width: 600px) {
        bible-tools-single-chapter-range {
          max-width: 80%;
        }
      }

      /* md, medium: 960px */
      @media (min-width: 960px) {
        bible-tools-single-chapter-range {
          max-width: 70%;
        }
      }

      /* lg, large: 1280px */
      @media (min-width: 1280px) {
        bible-tools-single-chapter-range {
          max-width: 50%;
        }
      }

      /* xl, extra-large: 1920px */
      @media (min-width: 1920px) {
      }

      bible-tools-single-chapter-range {
        direction: var(--bible-tools-single-chapter-range-text-direction);
        text-align: var(--bible-tools-single-chapter-range-text-align);
      }
    `
  }

  static get properties() {
    return {
      book: {
        reflect: false,
        type: String
      },
      chapter: {
        reflect: false,
        type: String
      },
      chapters: {
        reflect: false,
        type: Object
      },
      endverse: {
        reflect: false,
        type: String
      },
      fontStyle: {
        reflect: false,
        type: String
      },
      hasVerses: {
        reflect: false,
        type: Boolean
      },
      isBlock: {
        reflect: false,
        type: Boolean
      },
      language: {
        reflect: false,
        type: String
      },
      version: {
        reflect: false,
        type: String
      },
      verseNotFound: {
        reflect: false,
        type: Boolean
      }
    }
  }

  constructor() {
    super()

    this.book = 'Genesis'
    this.chapter = '1'
    this.chapters = []
    this.hasVerses = true
    this.isBlock = false
    this.verseNotFound = false
  }

  stateChanged(state) {
    this.book = state.book.current
    this.chapter = state.chapter.current

    // handle font preference
    if (state.preferences.fontStyle && state.preferences.fontStyle !== this.fontStyle) {

      this.fontStyle = state.preferences.fontStyle
      document.documentElement.style.setProperty('--bible-tools-single-verse-text-font', this.fontStyle)

      const computedFontSize = `${Number(getFontSizeFromString(this.fontStyle) * 1.25)}px`
      document.documentElement.style.setProperty('--bible-tools-single-verse-text-verse-font-size', `${computedFontSize}`)

      const computedLineHeight = `${Number(getFontSizeFromString(this.fontStyle) * 1.5)}px`
      document.documentElement.style.setProperty('--bible-tools-single-chapter-range-line-height', `${computedLineHeight}`)
      document.documentElement.style.setProperty('--bible-tools-single-chapter-range-reference-font', this.fontStyle)
    }

    // handle text align preference
    if (state.preferences.textAlign && state.preferences.textAlign !== this.textAlign) {
      this.textAlign = state.preferences.textAlign

      document.documentElement.style.setProperty('--bible-tools-single-chapter-range-text-align', this.textAlign)
    }

    // handle text direction preference
    if (state.preferences.textDirection && state.preferences.textDirection !== this.textDirection) {
      this.textDirection = state.preferences.textDirection

      document.documentElement.style.setProperty('--bible-tools-single-chapter-range-text-direction', this.textDirection)
    }

    const routeInfo = state.router.activeRoute.replace(state.site.path, '').split('/')

    const bookFromRoute = routeInfo[1] ? routeInfo[1] : undefined
    const chapterFromRoute = routeInfo[2] ? routeInfo[2] : undefined

    if (bookFromRoute && chapterFromRoute) {
      this.book = bookFromRoute
      this.chapter = chapterFromRoute
    }

    if (this.book && this.chapter) {
      try {
        this.chapters = state.reference.books[this.book].chapters
      } catch (e) {}

      try {
        this.endverse = this.chapters[this.chapter].verses
      } catch(e) {
        this.verseNotFound = true
      }

      this.isBlock = state.preferences.hasLineBreakAtVerse === 'yes'

      this.hasVerses = state.preferences.shouldDisplayVerseNumbers === 'yes'
      this.language = state.translation.language.current
      this.version = state.translation.version.current
    }
  }

  render() {
    return !this.verseNotFound
      ? html`
        <bible-tools-chapter-navigator navigatorType="backward"></bible-tools-chapter-navigator>
        <bible-tools-single-chapter-range
          ?isBlock=${this.isBlock}
          ?hasVerses=${this.hasVerses}
          language="${this.language}"
          version="${this.version}"
          book="${this.book}"
          chapter="${this.chapter}"
          startverse="1"
          endverse="${this.endverse}"
        ></bible-tools-single-chapter-range>
        <bible-tools-chapter-navigator navigatorType="forward"></bible-tools-chapter-navigator>
      `
      : html`
        <p class="verseNotFound">The passage was not found in the current translation.</p>
      `
  }
}

defineCustomElement('bible-tools-chapter-range-view', BibleToolsChapterRangeView)
