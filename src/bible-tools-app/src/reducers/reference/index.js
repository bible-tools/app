import { createReducer } from '../../utilities'
import { LOAD_REFERENCE_SUCCESS } from '../../actions/types'

export default createReducer(
  {},
  {
    [LOAD_REFERENCE_SUCCESS](state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
)
