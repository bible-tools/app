import { LitElement, css, html } from 'lit-element'
import { defineCustomElement, getUrlWithTrailingSlash } from '../utilities'

import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import { loadBook, loadChapter, navigateByPath } from '../dispatchers/dispatchers'

export class BibleToolsChapterNavigator extends connect(store)(LitElement) {
  _path = getUrlWithTrailingSlash(document.querySelector('base').href)

  static get styles() {
    return css`
      :host {
        flex: auto;
      }

      .click-target {
        height: 100%;
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
      navigatorType: {
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
    this.book = state.book.current
    this.chapter = state.chapter.current
    this.reference = state.reference
  }

  getNextChapter() {
    let nextChapter

    const chapterLength = Object.keys(this.reference.books[this.book].chapters).length
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
    navigateByPath(`${this._path}bible/${this.book}/${nextChapter}`)
  }

  render() {
    return html`
      <div class="click-target" @click="${() => this.handleNavigate()}"></div>
    `
  }
}

defineCustomElement('bible-tools-chapter-navigator', BibleToolsChapterNavigator)
