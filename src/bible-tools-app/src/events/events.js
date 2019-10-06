export const BIBLE_TOOLS_DRAWER_TOGGLE = 'bible-tools-drawer-toggle'
export const BIBLE_TOOLS_DRAWER_CLOSE = 'bible-tools-drawer-close'

export const BibleToolsDrawerToggle = () =>
  new CustomEvent(BIBLE_TOOLS_DRAWER_TOGGLE, {
    bubbles: true,
    composed: true
  })

export const BibleToolsDrawerClose = () =>
  new CustomEvent(BIBLE_TOOLS_DRAWER_CLOSE, {
    bubbles: true,
    composed: true
  })
