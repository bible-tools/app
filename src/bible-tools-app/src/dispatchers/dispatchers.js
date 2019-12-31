import { store } from '../store/configureStore'

import { navigate } from 'lit-redux-router'

import {
  loadBook as loadBookCreator,
  loadChapter as loadChapterCreator,
  loadVersion as loadVersionCreator,
  loadLanguage as loadLanguageCreator,
  setReaderFontStyle as setReaderFontStyleCreator,
  setReaderLineBreak as setReaderLineBreakCreator,
  setReaderTextAlign as setReaderTextAlignCreator,
  setReaderTextDirection as setReaderTextDirectionCreator,
  setReaderVerseDisplay as setReaderVerseDisplayCreator,
  setSitePath as setSitePathCreator,
  setSiteBrandPath as setSiteBrandPathCreator,
  setSiteTitle as setSiteTitleCreator,
} from '../actions/creators'

import { loadReference as loadReferenceCreator } from '../actions/thunks'

export const loadBook = book => store.dispatch(loadBookCreator(book))
export const loadChapter = chapter => store.dispatch(loadChapterCreator(String(chapter)))
export const loadLanguage = language => store.dispatch(loadLanguageCreator(language))
export const loadReference = (language, version) => store.dispatch(loadReferenceCreator(language, version))
export const loadVersion = version => store.dispatch(loadVersionCreator(version))

export const setReaderFontStyle = fontStyle => store.dispatch(setReaderFontStyleCreator(fontStyle))
export const setReaderLineBreak = hasLineBreakAtVerse => store.dispatch(setReaderLineBreakCreator(hasLineBreakAtVerse))
export const setReaderTextAlign = fontStyle => store.dispatch(setReaderTextAlignCreator(fontStyle))
export const setReaderTextDirection = textDirection => store.dispatch(setReaderTextDirectionCreator(textDirection))
export const setReaderVerseDisplay = shouldDisplay => store.dispatch(setReaderVerseDisplayCreator(shouldDisplay))

export const setSitePath = path => store.dispatch(setSitePathCreator(path))
export const setSiteBrandPath = brandPath => store.dispatch(setSiteBrandPathCreator(brandPath))
export const setSiteTitle = path => store.dispatch(setSiteTitleCreator(path))

export const navigateByPath = path => store.dispatch(navigate(path))
