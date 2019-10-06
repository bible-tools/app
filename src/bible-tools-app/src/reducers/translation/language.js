import { createReducer } from '../../utilities'
import { LOAD_LANGUAGE } from '../../actions/types'

export default createReducer(
  //initialState
  { current: '' },
  {
    [LOAD_LANGUAGE](state, { payload }) {
      return {
        current: payload ? payload : state
      }
    }
  }
)
