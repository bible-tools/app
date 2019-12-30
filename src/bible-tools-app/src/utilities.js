export const createReducer = (initialState, handlers) => (state = initialState, action) =>
  handlers.hasOwnProperty(action.type) === true ? handlers[action.type](state, action) : state

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('bible-tools-app-store-state')

    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem('bible-tools-app-store-state', serializedState)
  } catch (err) {
    // Ignore write errors...
  }
}

export const defineCustomElement = (tagName, element) => {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, element)
  }
}

export const getFontSizeFromString = fontStyle => {
  const p = document.createElement('p')
  p.style.font = fontStyle

  return p.style.fontSize.replace(/[^0-9\.\s]/g,'')
}

export const getLastPathSegment = () => {
  const match = window.location.pathname.match(/\/([a-z0-9_-]*[\/]?)$/)

  return match ? match[0].replace(/\//g, '') : ''
}

export const getUrlWithTrailingSlash = url => `${new URL(url).pathname}/`.replace(/\/+\//g, '/')
