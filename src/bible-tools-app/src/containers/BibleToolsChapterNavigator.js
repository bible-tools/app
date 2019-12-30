import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'

import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import { loadBook, loadChapter, navigateByPath } from '../dispatchers/dispatchers'

export class BibleToolsChapterNavigator extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        align-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        flex: auto;
        justify-content: center;
      }

      .button-container {
        align-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
      }

      .click-target {
        background-color: var(--bible-tools-chapter-navigator-click-target-background-color, initial);
        border: 0;
        color: var(--bible-tools-chapter-navigator-click-target-color, initial);
        height: 100%;
        margin: 0;
        outline: none;
        padding: 0;
        width: 100%;
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
      navigatorType: {
        reflect: false,
        type: String
      },
      sitePath: {
        reflect: false,
        type: String
      }
    }
  }

  constructor() {
    super()

    this.book = 'Genesis'
    this.chapter = '1'
    this.chapters = []
  }

  stateChanged(state) {
    this.book = state.book.current
    this.chapter = state.chapter.current

    this.sitePath = state.site.path

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
    }
  }

  getNextChapter() {
    let nextChapter

    const chapterLength = Object.keys(this.chapters).length
    const currentChapter = Number(this.chapter)

    if (this.navigatorType === 'forward') {
      nextChapter = currentChapter + 1
    } else {
      nextChapter = currentChapter - 1
    }

    if (nextChapter > chapterLength || nextChapter <= 0) {
      nextChapter = 1
    }

    return nextChapter
  }

  handleNavigate() {
    const nextChapter = this.getNextChapter()

    loadChapter(nextChapter)
    loadBook(this.book)
    navigateByPath(`${this.sitePath}bible/${this.book}/${nextChapter}`)
  }

  render() {
    return html`
      <div class="button-container ${this.navigatorType === 'forward' ? 'forward' : 'backward'}">
        <button class="click-target"
          @click="${() => this.handleNavigate()}"
        >
          ${this.navigatorType === 'forward' ? html`>` : html`<`}
        </button>
      </div>
    `
  }
}

defineCustomElement('bible-tools-chapter-navigator', BibleToolsChapterNavigator)
