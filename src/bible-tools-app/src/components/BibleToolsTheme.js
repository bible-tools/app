import { LitElement, html } from 'lit-element'
import { defineCustomElement } from '../utilities'

const persistThemeToStorage = (key, value) => {
  let now = new Date()
  now = now.getTime()

  localStorage.setItem(key, value)
  localStorage.setItem(`${key}-last-change`, now)
}

export const enableTheme = (newTheme = 'light', withTransition = false, persist = true) => {
  const html = document.documentElement

  let otherTheme
  if (newTheme === 'light') {
    otherTheme = 'dark'
  } else {
    otherTheme = 'light'
  }

  html.classList.add(`theme-${newTheme}`)
  html.classList.remove(`theme-${otherTheme}`)

  if (persist) {
    persistThemeToStorage('preference-theme', newTheme)
  }
}

export const getThemeFromStorage = () => {
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

export class BibleToolsTheme extends LitElement {
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

  _getThemeFromDocumentElement() {
    return document.documentElement.classList.contains('theme-light') ? 'light' : 'dark'
  }

  _getThemeFromTime() {
    const date = new Date()
    const hour = date.getHours()

    if (hour > 20 || hour < 5) {
      return 'dark'
    } else {
      return 'light'
    }
  }

  _keepInSync() {
    window.addEventListener('storage', ({ key, newValue }) => {
      if (key === 'preference-theme') {
        if (newValue === 'dark' || newValue === 'light') {
          enableTheme(event.newValue, true, false)
        }
      }
    })
  }

  _watchPrefersColorScheme() {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQueryList.addListener(event => {
      if (event.matches !== true) {
        if (this._getThemeFromDocumentElement() === 'dark') {
          enableTheme('light', true)
        }
      } else {
        if (this._getThemeFromDocumentElement() === 'light') {
          enableTheme('dark', true)
        }
      }
    })
  }

  firstUpdated() {
    this._keepInSync()
    this._watchPrefersColorScheme()
    enableTheme(getThemeFromStorage() || this._getThemeFromBrowser() || this._getThemeFromTime(), false)
  }
}

defineCustomElement('bible-tools-theme', BibleToolsTheme)
