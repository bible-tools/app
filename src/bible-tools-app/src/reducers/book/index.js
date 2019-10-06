import { createReducer } from '../../utilities'
import { LOAD_BOOK } from '../../actions/types'

export default createReducer(
  {},
  {
    [LOAD_BOOK](state, { payload }) {
      return {
        ...state,
        current: payload
      }
    }
  }
)
