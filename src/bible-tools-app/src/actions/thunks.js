import {
  loadReferenceRequest,
  loadReferenceSuccess,
  loadReferenceFailure
} from '../actions/creators.js'

export const loadReference = (language, version) => dispatch => {
  const url = `https://bible-tools.github.io/data/translations/${language}/${version}/reference.json`

  dispatch(loadReferenceRequest())

  fetch(url).then(response => {
    if (response.ok) {
      response.json().then(json => {
        dispatch(loadReferenceSuccess(json))
      })
    }
  }).catch(err => {
    dispatch(loadReferenceFailure(err))
  })
}
