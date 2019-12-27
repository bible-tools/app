import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'

import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'
import { navigate } from 'lit-redux-router'

export class BibleToolsBranding extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        margin-left: var(--bible-tools-branding-margin-left, -1rem);
        text-align: var(--bible-tools-branding-text-align, center);
        width: calc(100vw - 2rem);
      }

      div {
        margin-top: 0.5rem;
      }

      a {
        text-decoration: none;
        color: var(--text-color, white);
      }

      h1 {
        font-size: 2rem;
        margin-top: 2rem;
        color: var(--text-color, white);
      }
    `
  }

  stateChanged(state) {
    this.brandPath = state.site.brandPath
    this.siteTitle = state.site.title
    this.siteUrl = state.site.path
  }

  static get properties() {
    return {
      brandPath: {
        reflect: true,
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
    const path = `${this.siteUrl}${this.brandPath}`

    return html`
      <div
        @click=${() => {
          store.dispatch(navigate(`${path}`))
        }}
      >
        <a href="${path}">${this.siteTitle}</a>
      </div>
    `
  }
}

defineCustomElement('bible-tools-branding', BibleToolsBranding)
