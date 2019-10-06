import { createReducer } from '../../utilities'
import { LOAD_VERSION } from '../../actions/types'

export default createReducer(
  //initialState
  { current: '' },
  {
    [LOAD_VERSION](state, { payload }) {
      return {
        current: payload ? payload : state
      }
    }
  }
)
