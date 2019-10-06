import { combineReducers } from 'redux'

import language from './language'
import version from './version'

export default combineReducers({
  language,
  version
})
