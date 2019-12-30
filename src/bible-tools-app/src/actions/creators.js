import {
  LOAD_VERSION,
  LOAD_LANGUAGE,
  LOAD_BOOK,
  LOAD_CHAPTER,
  LOAD_REFERENCE_REQUEST,
  LOAD_REFERENCE_SUCCESS,
  LOAD_REFERENCE_FAILURE,
  SET_READER_FONT_STYLE,
  SET_READER_TEXT_ALIGN,
  SET_READER_VERSE_DISPLAY,
  SET_SITE_PATH,
  SET_SITE_BRAND_PATH,
  SET_SITE_TITLE
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

export const setSiteBrandPath = brandPath => ({
  type: SET_SITE_BRAND_PATH,
  payload: brandPath
})

export const setSiteTitle = title => ({
  type: SET_SITE_TITLE,
  payload: title
})

export const setReaderFontStyle = fontStyle => ({
  type: SET_READER_FONT_STYLE,
  payload: fontStyle
})

export const setReaderTextAlign = textAlign => ({
  type: SET_READER_TEXT_ALIGN,
  payload: textAlign
})

export const setReaderVerseDisplay = shouldDisplayVerses => ({
  type: SET_READER_VERSE_DISPLAY,
  payload: shouldDisplayVerses
})
