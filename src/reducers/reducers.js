import { initialState } from '../stores/stores.js'
import { routeActions } from 'react-router-redux'
import fetch from 'isomorphic-fetch'
import { GET_BUS_STOPS_AROUND_ME, SET_METERS_AROUND_ME, SET_COORS_AROUND_ME } from '../actions/actions.js'

//
//  reducers helpers
//

function requestBusStopsAroundMe( coors, meters ) {
  fetch( 'secret-depths-4660.herokuapp/paradas?lt=' + coors.latitude + '&ln=' + coors.longitude + '&r=' + meters )
    .then( function(){
      dispatch( routeActions.push( '/loading' ) );
    })
    .then( function( response ) {
      if ( response.status >= 400 ) {
        dispatch( routeActions.push( '/errors' ) );
        return {
          error: {
            type: response.status,
            message: response.message
          }
        }
      }
      dispatch( routeActions.push( '/results' ) );
      return response.json();
    })
}

//
//  reducers case by action
//

const busStopsAroundMe = ( state=initialState, action ) => {
  switch ( action.type ) {
    case GET_BUS_STOPS_AROUND_ME:
      let busStops = requestBusStopsAroundMe( action.coors, action.meters );
      return busStops
    case SET_METERS_AROUND_ME:
      return Object.assign( state, { meters: action.meters } );
    case SET_COORS_AROUND_ME:
      return  Object.assign( state, { coors: action.coors } );
    default:
      return state;
  }
}

export default busStopsAroundMe;

