import { LitElement, html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'

import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'

import './components/BibleToolsDrawer'
import './components/BibleToolsHamburger'
import './components/BibleToolsTheme'

import { getUrlWithTrailingSlash } from './utilities'
import {
  BIBLE_TOOLS_DRAWER_TOGGLE,
  BIBLE_TOOLS_DRAWER_CLOSE
} from './events/events'

import { setSitePath } from './dispatchers/dispatchers'

import { store } from './store/configureStore'
import { connectRouter } from 'lit-redux-router'

connectRouter(store)

export class BibleToolsApp extends connect(store)(LitElement) {
  static get styles() {
    return css`
      app-header {
        background-color: var(--primary-background-color, #000);
        color: var(--primary-foreground-color, #fff);
      }

      app-toolbar {
        background-color: var(--primary-background-color, #000);
        font-size: 1.5rem;
      }

      bible-tools-hamburger {
        pointer-events: unset;
      }

      app-drawer {
        --app-drawer-scrim-background: var(--drawer-scrim-background, rgba(0, 0, 0, 0.8));

        /* larger than paper-dropdown-menu-light */
        z-index: 20;
      }

      .app-content {
        background-color: var(--primary-background-color, #000);
        color: var(--primary-foreground-color, #fff);
        padding-top: 1rem;
      }

      /* xs, extra-small: 0px */
      @media (min-width: 0px) {
        :host {
          --bible-tools-menu-drop-down-content-min-width: 7rem;
        }
      }

      /* sm, small: 600px */
      @media (min-width: 600px) {
        :host {
          --bible-tools-menu-drop-down-content-min-width: 11rem;
        }
      }

      /* md, medium: 960px */
      @media (min-width: 960px) {
        :host {
          --bible-tools-menu-drop-down-content-min-width: 15rem;
        }
      }

      /* lg, large: 1280px */
      @media (min-width: 1280px) {
        :host {
          --bible-tools-menu-drop-down-content-min-width: 20rem;
        }
      }

      /* xl, extra-large: 1920px */
      @media (min-width: 1920px) {}
    `
  }

  static get properties() {
    return {
      sitePath: {
        reflect: false,
        type: String
      }
    }
  }

  constructor() {
    super()

    setSitePath(getUrlWithTrailingSlash(document.querySelector('base').href))
  }

  _handleDrawerToggle(close = false) {
    const appDrawer = this.shadowRoot.querySelector('app-drawer')

    if (appDrawer.getAttribute('opened') === '' || close === true) {
      appDrawer.removeAttribute('opened')

      return
    }

    appDrawer.setAttribute('opened', '')
  }

  firstUpdated() {
    this.addEventListener(BIBLE_TOOLS_DRAWER_TOGGLE, () => {
      this._handleDrawerToggle()
    })

    this.addEventListener(BIBLE_TOOLS_DRAWER_CLOSE, () => {
      this._handleDrawerToggle(true)
    })
  }

  stateChanged(state) {
    this.sitePath = state.site.path
  }

  render() {
    return html`
      <bible-tools-theme></bible-tools-theme>
      <app-header reveals>
        <app-toolbar>
          <bible-tools-hamburger>Menu</bible-tools-hamburger>

          <lit-route
            .resolve="${() => import('./containers/BibleToolsMenu')}"
            component="bible-tools-menu"
            path="${this.sitePath}"
          >
          </lit-route>

          <lit-route
            .resolve="${() => import('./containers/BibleToolsMenu')}"
            component="bible-tools-menu"
            path="${this.sitePath}bible/:book/:chapter"
          ></lit-route>

          <lit-route
            .resolve="${() => import('./containers/BibleToolsBranding')}"
            component="bible-tools-branding"
            path="${this.sitePath}preferences"
          ></lit-route>
        </app-toolbar>
      </app-header>

      <app-drawer>
        <bible-tools-drawer></bible-tools-drawer>
      </app-drawer>

      <!-- book, chapter, startverse, endverse -->
      <div class="app-content">
        <lit-route
          .resolve="${() => import ('./containers/BibleToolsChapterRangeView')}"
          component="bible-tools-chapter-range-view"
          path="${this.sitePath}"
        >
        </lit-route>

        <lit-route
          .resolve="${() => import ('./containers/BibleToolsChapterRangeView')}"
          component="bible-tools-chapter-range-view"
          path="${this.sitePath}bible/:book/:chapter"
        ></lit-route>

        <lit-route
          .resolve="${() => import('./containers/BibleToolsPreferences')}"
          component="bible-tools-preferences"
          path="${this.sitePath}preferences"
        ></lit-route>

        <lit-route><h1>404 Not found</h1></lit-route>
      </div>
    `
  }
}
