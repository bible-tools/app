import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'

import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import { loadBook, loadChapter } from '../dispatchers/dispatchers'

import '../components/BibleToolsSingleChapterRange'
import '../components/BibleToolsSingleVerse'
import './BibleToolsChapterNavigator'

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
          max-width: 50%;
        }
      }

      /* xl, extra-large: 1920px */
      @media (min-width: 1920px) {}
    `
  }

  constructor() {
    super()

    this.book = 'Genesis'
    this.chapter = '1'
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
    const routeInfo = state.router.activeRoute.replace(state.site.path, '').split('/')

    const bookFromRoute = routeInfo[1] ? routeInfo[1] : undefined
    const chapterFromRoute = routeInfo[2] ? routeInfo[2] : undefined

    if (bookFromRoute && chapterFromRoute) {
      this.book = bookFromRoute
      this.chapter = chapterFromRoute
    }

    if (this.book && this.chapter) {
      let chapters

      try {
        chapters = state.reference.books[this.book].chapters
      } catch(e) {
        return
      }

      this.endverse = chapters[this.chapter].verses
      this.language = state.translation.language.current
      this.version = state.translation.version.current
    }
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
