import { store } from '../store/configureStore'

import { navigate } from 'lit-redux-router'

import {
  loadBook as loadBookCreator,
  loadChapter as loadChapterCreator,
  loadVersion as loadVersionCreator,
  loadLanguage as loadLanguageCreator,
  setReaderFontStyle as setReaderFontStyleCreator,
  setReaderTextAlign as setReaderTextAlignCreator,
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
export const setReaderTextAlign = fontStyle => store.dispatch(setReaderTextAlignCreator(fontStyle))
export const setReaderVerseDisplay = shouldDisplay => store.dispatch(setReaderVerseDisplayCreator(shouldDisplay))

export const setSitePath = path => store.dispatch(setSitePathCreator(path))
export const setSiteBrandPath = brandPath => store.dispatch(setSiteBrandPathCreator(brandPath))
export const setSiteTitle = path => store.dispatch(setSiteTitleCreator(path))

export const navigateByPath = path => store.dispatch(navigate(path))
