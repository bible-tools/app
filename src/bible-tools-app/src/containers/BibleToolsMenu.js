import { LitElement, css, html } from 'lit-element'
import { defineCustomElement, getUrlWithTrailingSlash } from '../utilities'

import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import { loadBook, loadChapter, navigateByPath } from '../dispatchers/dispatchers'

export class BibleToolsMenu extends connect(store)(LitElement) {
  _path = getUrlWithTrailingSlash(document.querySelector('base').href)

  static get styles() {
    return css`
      .paper-dropdown-flex {
        flex: auto;
        min-width: 1rem;
      }

      .menu-box {
        display: flex;
      }

      .menu-box > paper-dropdown-menu-light {
        flex: auto;
        padding-left: 1rem;
      }

      paper-listbox {
        width: 12rem;
        padding: 0;
        max-width: 100%;
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
      reference: {
        reflect: false,
        type: Object
      },
    }
  }

  constructor() {
    super()

    this.book = 'Genesis'
    this.chapter = '1'
  }

  stateChanged(state) {
    this.book = state.book.current
    this.chapter = state.chapter.current
    this.reference = state.reference
  }

  render() {
    return html`
      <div class="menu-box">
        <div class="paper-dropdown-flex"></div>
        <paper-dropdown-menu-light no-animations label="Book" tabindex="0" role="combobox" aria-autocomplete="none" aria-haspopup="true" aria-disabled="false" dir="null">
          <paper-listbox slot="dropdown-content" class="dropdown-content" aria-expanded="true" role="listbox" selected="${Object.keys(this.reference.books).indexOf(this.book)}" tabindex="0">
            <paper-item role="option" tabindex="${this.book === 'Genesis' ? 0 : 1}" aria-disabled="false" @click="${() => {
              loadChapter('1')
              loadBook('Genesis')
              navigateByPath(`${this._path}bible/Genesis/1`)
            }}">Genesis</paper-item>
            ${Object.keys(this.reference.books).slice(1).map(book => {
              return html`<paper-item role="option" tabindex="${book === this.book ? 0 : 1}" aria-disabled="false" @click="${() => {
                loadChapter('1')
                loadBook(book)
                navigateByPath(`${this._path}bible/${book}/1`)
              }}">${book}</paper-item>`
            })}
          </paper-listbox>
        </paper-dropdown-menu-light>
        <div class="paper-dropdown-flex"></div>
        <paper-dropdown-menu-light no-animations label="Chapter" tabindex="0" role="combobox" aria-autocomplete="none" aria-haspopup="true" aria-disabled="false" dir="null">
          <paper-listbox slot="dropdown-content" class="dropdown-content" aria-expanded="true" role="listbox" selected="${this.chapter - 1}" tabindex="0">
            ${Object.keys(this.reference.books[this.book].chapters).map(chapter => {
                return html`<paper-item role="option" tabindex="${Number(chapter) === this.chapter ? '0' : 1}" aria-disabled="false" @click="${() => {
                  loadChapter(chapter)
                  navigateByPath(`${this._path}bible/${this.book}/${chapter}`)
                }}">${chapter}</paper-item>`
              })
            }
          </paper-listbox>
        </paper-dropdown-menu-light>
        <div class="paper-dropdown-flex"></div>
      </div>
    `
  }
}

defineCustomElement('bible-tools-menu', BibleToolsMenu)
