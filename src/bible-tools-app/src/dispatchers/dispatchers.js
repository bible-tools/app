import { store } from '../store/configureStore'

import { navigate } from 'lit-redux-router'

import {
  loadBook as loadBookCreator,
  loadChapter as loadChapterCreator,
  loadVersion as loadVersionCreator,
  loadLanguage as loadLanguageCreator
} from '../actions/creators'

import { loadReference as loadReferenceCreator } from '../actions/thunks'

export const loadBook = book => store.dispatch(loadBookCreator(book))
export const loadChapter = chapter => store.dispatch(loadChapterCreator(chapter))
export const loadLanguage = language => store.dispatch(loadLanguageCreator(language))
export const loadReference = (language, version) => store.dispatch(loadReferenceCreator(language, version))
export const loadVersion = version => store.dispatch(loadVersionCreator(version))
export const navigateByPath = path => store.dispatch(navigate(path))
