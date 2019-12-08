import { LitElement, html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin'

import '@polymer/app-layout/app-drawer/app-drawer'
import '@polymer/app-layout/app-header/app-header'
import '@polymer/app-layout/app-toolbar/app-toolbar'

import '@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js'
import '@polymer/paper-item/paper-item.js'
import '@polymer/paper-listbox/paper-listbox.js'

import './containers/BibleToolsBranding'
import './components/BibleToolsDrawer'
import './components/BibleToolsHamburger'

import './containers/BibleToolsChapterNavigator'
import './containers/BibleToolsChapterRangeView'
import './containers/BibleToolsMenu'

import { getUrlWithTrailingSlash } from './utilities'
import {
  BIBLE_TOOLS_DRAWER_TOGGLE,
  BIBLE_TOOLS_DRAWER_CLOSE
} from './events/events'

import { store } from './store/configureStore'
import { connectRouter } from 'lit-redux-router'

connectRouter(store)

export class BibleToolsApp extends connect(store)(LitElement) {
  _path = getUrlWithTrailingSlash(document.querySelector('base').href)

  static get styles() {
    return css`
      #landing-chapter-view {
        display: flex;
        padding-top: 1rem;
      }

      .chapter-view-flex {
        flex: auto;
      }

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
        padding: 1rem;
      }

      /* xs, extra-small: 0px */
      @media (min-width: 0px) {
        :host {
          --bible-tools-menu-drop-down-content-min-width: 7rem;
        }

        bible-tools-single-chapter-range {
          max-width: 90%;
        }

        .chapter-view-flex {
          min-width: 5%;
        }
      }

      /* sm, small: 600px */
      @media (min-width: 600px) {
        :host {
          --bible-tools-menu-drop-down-content-min-width: 11rem;
        }

        bible-tools-single-chapter-range {
          max-width: 80%;
        }

        .chapter-view-flex {
          min-width: 10%;
        }
      }

      /* md, medium: 960px */
      @media (min-width: 960px) {
        :host {
          --bible-tools-menu-drop-down-content-min-width: 15rem;
        }

        bible-tools-single-chapter-range {
          max-width: 60%;
        }

        .chapter-view-flex {
          min-width: 20%;
        }
      }

      /* lg, large: 1280px */
      @media (min-width: 1280px) {
        :host {
          --bible-tools-menu-drop-down-content-min-width: 20rem;
        }

        bible-tools-single-chapter-range {
          max-width: 50%;
        }

        .chapter-view-flex {
          min-width: 25%;
        }
      }

      /* xl, extra-large: 1920px */
      @media (min-width: 1920px) {}
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
      endverse: {
        reflect: false,
        type: String
      },
      language: {
        reflect: false,
        type: String
      },
      version: {
        reflect: false,
        type: String
      },
      siteTitle: {
        reflect: false,
        type: String
      },
      siteUrl: {
        reflect: false,
        type: String
      }
    }
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
    this.book = state.book.current
    this.chapter = state.chapter.current
    this.language = state.translation.language.current
    this.version = state.translation.version.current
    this.endverse = state.reference.books[this.book].chapters[this.chapter].verses
  }

  render() {
    return html`
      <app-header reveals>
        <app-toolbar>
          <bible-tools-hamburger>Menu</bible-tools-hamburger>
          <bible-tools-menu></bible-tools-menu>
        </app-toolbar>
      </app-header>

      <app-drawer swipe-open>
        <bible-tools-drawer></bible-tools-drawer>
      </app-drawer>

      <!-- book, chapter, startverse, endverse -->
      <div class="app-content">
        <lit-route path="${this._path}">
          <div id="landing-chapter-view">
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
          </div>
        </lit-route>

        <lit-route
          component="bible-tools-chapter-range-view"
          path="${this._path}bible/:book/:chapter"
        ></lit-route>

        <lit-route><h1>404 Not found</h1></lit-route>
      </div>
    `
  }
}
