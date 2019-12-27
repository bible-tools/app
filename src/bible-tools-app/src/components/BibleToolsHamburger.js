import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'

import '@polymer/paper-icon-button'
import '@polymer/iron-icons'

import { BibleToolsDrawerToggle } from '../events/events'

export class BibleToolsHamburger extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 1.5rem;
      }

      paper-icon-button {
        color: var(--primary-text-color, #000);
        height: 3rem;
        margin-top: 0.5rem;
        pointer-events: all;
        position: relative;
        width: 3rem;
      }

      svg {
        height: 1.5rem;
        pointer-events: none;
        width: 1.5rem;
      }
    `
  }

  _handleHamburgerClick(event) {
    this.shadowRoot.dispatchEvent(
      BibleToolsDrawerToggle(event)
    )
  }

  render() {
    return html`
      <paper-icon-button
        @click="${event => this._handleHamburgerClick(event)}"
        aria-label="Featured Cities"
        icon="menu"
      ></paper-icon-button>
    `
  }
}

defineCustomElement('bible-tools-hamburger', BibleToolsHamburger)
