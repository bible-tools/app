import {
  LOAD_VERSION,
  LOAD_LANGUAGE,
  LOAD_BOOK,
  LOAD_CHAPTER,
  LOAD_REFERENCE_REQUEST,
  LOAD_REFERENCE_SUCCESS,
  LOAD_REFERENCE_FAILURE,
  SET_SITE_PATH
} from './types'

// action creators
export const loadReferenceRequest = reference => ({
  type: LOAD_REFERENCE_REQUEST,
  payload: reference
})

export const loadReferenceSuccess = reference => ({
  type: LOAD_REFERENCE_SUCCESS,
  payload: reference
})

export const loadReferenceFailure = err => ({
  type: LOAD_REFERENCE_FAILURE,
  payload: err,
  error: true
})

export const loadLanguage = language => ({
  type: LOAD_LANGUAGE,
  payload: language
})

export const loadVersion = version => ({
  type: LOAD_VERSION,
  payload: version
})

export const loadBook = book => ({
  type: LOAD_BOOK,
  payload: book
})

export const loadChapter = chapter => ({
  type: LOAD_CHAPTER,
  payload: chapter
})

export const setSitePath = path => ({
  type: SET_SITE_PATH,
  payload: path
})
