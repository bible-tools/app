import { createReducer } from '../../utilities'
import {
  SET_READER_FONT_STYLE,
  SET_READER_LINE_BREAK,
  SET_READER_TEXT_ALIGN,
  SET_READER_TEXT_DIRECTION,
  SET_READER_VERSE_DISPLAY,
} from '../../actions/types'

export default createReducer(
  {},
  {
    [SET_READER_FONT_STYLE](state, { payload }) {
      return {
        ...state,
        fontStyle: payload
      }
    },
    [SET_READER_LINE_BREAK](state, { payload }) {
      return {
        ...state,
        hasLineBreakAtVerse: payload
      }
    },
    [SET_READER_TEXT_ALIGN](state, { payload }) {
      return {
        ...state,
        textAlign: payload
      }
    },
    [SET_READER_TEXT_DIRECTION](state, { payload }) {
      return {
        ...state,
        textDirection: payload
      }
    },
    [SET_READER_VERSE_DISPLAY](state, { payload }) {
      return {
        ...state,
        shouldDisplayVerseNumbers: payload
      }
    },
  }
)
