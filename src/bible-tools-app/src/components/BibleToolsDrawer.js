import { LitElement, css, html } from 'lit-element'
import { defineCustomElement, getUrlWithTrailingSlash } from '../utilities'

import '@polymer/paper-listbox/paper-listbox'
import '@polymer/paper-item/paper-item'

import { loadBook, loadChapter, loadLanguage, loadReference, loadVersion, navigateByPath } from '../dispatchers/dispatchers'

import { BibleToolsDrawerClose, BibleToolsDrawerToggle } from '../events/events'

export class BibleToolsDrawer extends LitElement {
  _path = getUrlWithTrailingSlash(document.querySelector('base').href)

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

  _enableTheme(newTheme = 'light', withTransition = false, persist = true) {
    const html = document.documentElement

    let otherTheme
    if (newTheme === 'light') {
      otherTheme = 'dark'
    } else {
      otherTheme = 'light'
    }

    html.classList.add(`theme-${newTheme}`)
    html.classList.remove(`theme-${otherTheme}`)

    let paperItem = this.shadowRoot.getElementById(`theme-${otherTheme}-paper-item`)

    paperItem.classList.add('enabled')
    paperItem.setAttribute('aria-pressed', false)

    paperItem = this.shadowRoot.getElementById(`theme-${newTheme}-paper-item`)
    paperItem.classList.remove('enabled')
    paperItem.setAttribute('aria-pressed', true)

    this.shadowRoot.dispatchEvent(
      BibleToolsDrawerClose()
    )

    if (persist) {
      this._persistToStorage('preference-theme', newTheme)
    }
  }

  _getThemeFromBrowser() {
    let mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    if (mediaQueryList.matches) {
      return 'dark'
    } else {
      mediaQueryList = window.matchMedia('(prefers-color-scheme: light)')

      if (mediaQueryList.matches) {
        return 'light'
      } else {
        return undefined
      }
    }
  }

  _getThemeFromStorage() {
    const pref = localStorage.getItem('preference-theme')
    const lastChanged = localStorage.getItem('preference-theme-last-change')

    let now = new Date()
    now = now.getTime()

    const minutesPassed = (now - lastChanged) / (1000 * 60)

    if (minutesPassed < 120 && pref === 'light') {
      return 'light'
    } else if (minutesPassed < 120 && pref === 'dark') {
      return 'dark'
    } else {
      return undefined
    }
  }

  _getThemeFromTime() {
    const date = new Date
    const hour = date.getHours()

    if (hour > 20 || hour < 5) {
      return 'dark'
    } else {
      return 'light'
    }
  }

  _handleTranslationChange({ language, version }) {
    return event => {
      const book = 'Genesis'
      const chapter = '1'

      loadChapter(chapter)
      loadBook(book)
      navigateByPath(`${this._path}bible/${book}/${chapter}`)

      loadReference(language, version)
      loadLanguage(language)
      loadVersion(version)

      this.shadowRoot.dispatchEvent(BibleToolsDrawerToggle())
    }
  }

  _keepInSync() {
    window.addEventListener('storage', event => {
      if (event.key === 'preference-theme') {
        if (event.newValue === 'light') {
          this._enableTheme('light', true, false)
        } else if (event.newValue === 'dark') {
          this._enableTheme('dark', true, false)
        }
      }
    })
  }

  _persistToStorage(key, value) {
    let now = new Date()
    now = now.getTime()

    localStorage.setItem(key, value)
    localStorage.setItem(`${key}-last-change`, now)
  }

  _watchPrefersColorScheme() {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQueryList.addListener(event => {
      const root = document.documentElement

      if (event.matches !== true) {
        if (!root.classList.contains('theme-light')) {
          this._enableTheme('light', true)
        }
      }
      else {
        if (!root.classList.contains('theme-dark')) {
          this._enableTheme('dark', true)
        }
      }
    })
  }

  firstUpdated() {
    this._keepInSync()
    this._watchPrefersColorScheme()
    this._enableTheme(this._getThemeFromStorage() || this._getThemeFromBrowser() || this._getThemeFromTime(), false)
  }

  render() {
    return html`
      <div class="drawer-container">
        <div class="drawer-header">Theme</div>
        <paper-listbox>
          <div class="sidebar-item">
            <paper-item id="theme-light-paper-item" @click=${()=> this._enableTheme('light', true)}>Light</paper-item>
          </div>
          <div class="sidebar-item">
            <paper-item id="theme-dark-paper-item" @click=${()=> this._enableTheme('dark', true)}>Dark</paper-item>
          </div>
        </paper-listbox>
        <div class="drawer-header">Translations</div>
        <div class="language">English</div>
        <paper-listbox>
          <div class="sidebar-item">
            <paper-item @click=${this._handleTranslationChange({ language: 'en' , version: 'ASV' })}>ASV</paper-item>
            <paper-item @click=${this._handleTranslationChange({ language: 'en' , version: 'KJV' })}>KJV</paper-item>
          </div>
        </paper-listbox>
        <div class="language">French</div>
        <paper-listbox>
          <div class="sidebar-item">
            <paper-item @click=${this._handleTranslationChange({ language: 'fr' , version: 'FreSegond' })}>FreSegond
            </paper-item>
          </div>
        </paper-listbox>
        <div class="language">German</div>
        <paper-listbox>
          <div class="sidebar-item">
            <paper-item @click=${this._handleTranslationChange({ language: 'de' , version: 'GerElb1905' })}>GerElb1905
            </paper-item>
          </div>
        </paper-listbox>
        <div class="language">Spanish</div>
        <paper-listbox>
          <div class="sidebar-item">
            <paper-item @click=${this._handleTranslationChange({ language: 'es' , version: 'SpaRV' })}>SpaRV</paper-item>
          </div>
        </paper-listbox>
      </div>
    `
  }
}

defineCustomElement('bible-tools-drawer', BibleToolsDrawer)
