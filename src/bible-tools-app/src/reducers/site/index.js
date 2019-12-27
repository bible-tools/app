import { createReducer } from '../../utilities'
import { SET_SITE_PATH, SET_SITE_BRAND_PATH, SET_SITE_TITLE } from '../../actions/types'

export default createReducer(
  {},
  {
    [SET_SITE_PATH](state, { payload }) {
      return {
        ...state,
        path: payload
      }
    },
    [SET_SITE_BRAND_PATH](state, { payload }) {
      return {
        ...state,
        brandPath: payload
      }
    },
    [SET_SITE_TITLE](state, { payload }) {
      return {
        ...state,
        title: payload
      }
    }
  }
)
