import { LitElement, css, html } from 'lit-element'
import { defineCustomElement, getUrlWithTrailingSlash } from '../utilities'

import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import '../components/BibleToolsSingleChapterRange'
import '../components/BibleToolsSingleVerse'
import './BibleToolsChapterNavigator'

export class BibleToolsChapterRangeView extends connect(store)(LitElement) {
  _path = getUrlWithTrailingSlash(document.querySelector('base').href)

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
          max-width: 60%;
        }
      }

      /* lg, large: 1280px */
      @media (min-width: 1280px) {
        bible-tools-single-chapter-range {
          max-width: 33%;
        }
      }

      /* xl, extra-large: 1920px */
      @media (min-width: 1920px) {}
    `
  }

  static get properties() {
    return {
      language: {
        type: String
      },
      version: {
        type: String
      },
      book: {
        reflect: false,
        type: String
      },
      chapter: {
        reflect: false,
        type: String
      },
      endverse: {
        reflect: false,
        type: String
      },
      reference: {
        reflect: false,
        type: Object
      }
    }
  }

  stateChanged(state) {
    this.endverse = state.reference.books[this.book].chapters[this.chapter].verses
    this.language = state.translation.language.current
    this.version = state.translation.version.current
  }

  render() {
    return html`
      <bible-tools-chapter-navigator
        navigatorType="backward"
      ></bible-tools-chapter-navigator>
      <bible-tools-single-chapter-range
        hasreference
        language="${this.language}"
        version="${this.version}"
        book="${this.book}"
        chapter="${this.chapter}"
        startverse="1"
        endverse="${this.endverse}"
      ></bible-tools-single-chapter-range>
      <bible-tools-chapter-navigator
        navigatorType="forward"
      ></bible-tools-chapter-navigator>
    `
  }
}

defineCustomElement('bible-tools-chapter-range-view', BibleToolsChapterRangeView)
