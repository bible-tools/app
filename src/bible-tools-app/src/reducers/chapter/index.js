import { createReducer } from '../../utilities'
import { LOAD_CHAPTER } from '../../actions/types'

export default createReducer(
  {},
  {
    [LOAD_CHAPTER](state, { payload }) {
      return {
        ...state,
        current: payload
      }
    }
  }
)
