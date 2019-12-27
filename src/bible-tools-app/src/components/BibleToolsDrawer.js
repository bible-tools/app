import { LitElement, css, html } from 'lit-element'
import { defineCustomElement } from '../utilities'

import '@polymer/paper-listbox/paper-listbox'
import '@polymer/paper-item/paper-item'

import { connect } from 'pwa-helpers/connect-mixin'
import { store } from '../store/configureStore'

import { navigateByPath, setSiteBrandPath, setSiteTitle } from '../dispatchers/dispatchers'

import { BibleToolsDrawerToggle } from '../events/events'

export class BibleToolsDrawer extends connect(store)(LitElement) {
  static get styles() {
    return css`
      .drawer-container {
        background-color: var(--bible-tools-drawer-container-background-color, initial);
        color: var(--primary-foreground-color, #fff);
        height: 100%;

        /* scroll without scrollbars */
        overflow: auto;
        -ms-overflow-style: none; /* IE 10+ */
        scrollbar-width: none; /* Firefox */
      }

      /* scroll without scrollbars */
      .drawer-container::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }

      .drawer-header {
        background-color: var(--bible-tools-drawer-header-background-color, initial);
        color: var(--bible-tools-drawer-header-color, initial);
        font-size: 1.5rem;
        font-weight: bold;
        padding: 1rem;
      }

      .drawer-header a {
        text-decoration: none;
        color: var(--bible-tools-drawer-header-color, initial);
      }

      .language {
        font-size: 1.25rem;
        padding: 1rem 0 0 1.75rem;
        background-color: var(--paper-listbox-background-color, initial);
      }

      paper-item {
        margin-left: 2rem;
      }

      .sidebar-item {
        margin-bottom: 0.5rem;
      }

      .sidebar-item:hover {
        cursor: pointer;
      }

      .sidebar-item:focus {
        outline: none;
      }
    `
  }

  static get properties() {
    return {
      sitePath: {
        reflect: false,
        type: String
      },
      drawerTitle: {
        reflect: false,
        type: String
      }
    }
  }

  constructor() {
    super()

    this.drawerTitle = 'Bible Tools'
  }

  stateChanged(state) {
    this.sitePath = state.site.path
  }

  render() {
    const navToReader = (that, title, path) => () => {
      that.shadowRoot.dispatchEvent(BibleToolsDrawerToggle())

      setSiteTitle(title)
      setSiteBrandPath(path)
      navigateByPath(`${that.sitePath}${path}`)
    }

    return html`
      <div class="drawer-container">
        <div class="drawer-header">
          <a href="${this.sitePath}" @click=${navToReader(this, 'Bible Tools', '')}>${this.drawerTitle}</a>
        </div>
        <paper-listbox>
          <div class="sidebar-item">
            <paper-item @click=${navToReader(this, 'Bible Tools', '')}>Reader</paper-item>
          </div>
        </paper-listbox>
        <paper-listbox>
          <div class="sidebar-item">
            <paper-item @click=${navToReader(this, 'Preferences', 'preferences')}>Preferences</paper-item>
          </div>
        </paper-listbox>
      </div>
    `
  }
}

defineCustomElement('bible-tools-drawer', BibleToolsDrawer)
