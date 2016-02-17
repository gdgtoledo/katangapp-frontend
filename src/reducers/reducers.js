import { loadingState } from '../actions/actions'
import { initialState } from './initialState'

import fetch from 'isomorphic-fetch'

//
//  reducers helpers
//

function requestAroundMe(state, action, meters, coors) {
  fetch('secret-depths-4660.herokuapp/paradas?lt=' + coors.latitude + '&ln=' + coors.longitude '&r=' + meters)
    .then(function(){
      loadingState = true
    })
    .then(function(response) {
      if (response.status >= 400) {
          Object.assign({}, state, {
          loading: loadingState.HIDE,
          error: {
            type: response.status,
            msg: response.message
          }
        })
      }
      loadingState = false
      return Object.assign({}, state, {
        loading: loadingState.HIDE,
        aroundMe: response.json()
      })
    })
  })
}

//
//  reducers case by action
//

function geolocalize(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BUS_STOPS_AROUND_ME:
      return requestAroundMe()
    default:
      return state
  }
}

//
//  Combine reducers
//

const katangapp = combineReducers({
  geolocalize
})

export default katangapp
