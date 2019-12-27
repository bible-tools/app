import { store } from '../store/configureStore'

import { navigate } from 'lit-redux-router'

import {
  loadBook as loadBookCreator,
  loadChapter as loadChapterCreator,
  loadVersion as loadVersionCreator,
  loadLanguage as loadLanguageCreator,
  setSitePath as setSitePathCreator
} from '../actions/creators'

import { loadReference as loadReferenceCreator } from '../actions/thunks'

export const loadBook = book => store.dispatch(loadBookCreator(book))
export const loadChapter = chapter => store.dispatch(loadChapterCreator(String(chapter)))
export const loadLanguage = language => store.dispatch(loadLanguageCreator(language))
export const loadReference = (language, version) => store.dispatch(loadReferenceCreator(language, version))
export const loadVersion = version => store.dispatch(loadVersionCreator(version))

export const setSitePath = path => store.dispatch(setSitePathCreator(path))

export const navigateByPath = path => store.dispatch(navigate(path))
