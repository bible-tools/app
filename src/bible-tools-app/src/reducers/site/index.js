import { createReducer } from '../../utilities'
import { SET_SITE_PATH } from '../../actions/types'

export default createReducer(
  {},
  {
    [SET_SITE_PATH](state, { payload }) {
      return {
        ...state,
        path: payload
      }
    }
  }
)
