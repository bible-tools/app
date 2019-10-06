import { LitElement, css, html } from 'lit-element'
import { defineCustomElement, getUrlWithTrailingSlash } from '../utilities'

import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'
import { navigate } from 'lit-redux-router'

import { loadBook, loadChapter } from '../dispatchers/dispatchers'

export class BibleToolsBranding extends connect(store)(LitElement) {
  _path = getUrlWithTrailingSlash(document.querySelector('base').href)

  static get styles() {
    return css`
      :host {
        margin-left: var(--bible-tools-branding-margin-left, -1rem);
        text-align: var(--bible-tools-branding-text-align, center);
        width: 100%;
      }

      a {
        text-decoration: none;
        color: var(--text-color, white);
      }
    `
  }

  stateChanged(state) {
    this.book = state.book.current
    this.chapter = state.chapter.current
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
      siteTitle: {
        reflect: true,
        type: String
      },
      siteUrl: {
        reflect: true,
        type: String
      }
    }
  }

  render() {
    return html`
      <div @click=${() => {
        loadChapter(1)
        loadBook('Genesis')

        store.dispatch(navigate(`${this._path}bible/Genesis/1`))
      }}><a href=${this.siteUrl}>${this.siteTitle}</a></div>
    `
  }
}

defineCustomElement('bible-tools-branding', BibleToolsBranding)
