import initialState from '../stores/initialState'

import { SET_COORDS_AROUND_ME, SET_METERS_AROUND_ME, /*GET_BUS_STOPS_AROUND_ME_REQUEST,*/ GET_BUS_STOPS_AROUND_ME_SUCCESS, GET_BUS_STOPS_AROUND_ME_ERROR } from '../actions/actions.js'

//
//  reducers case by action
//

const busStopsAroundMe = ( state=initialState, action ) => {
  let nextState
  switch ( action.type ) {
    case GET_BUS_STOPS_AROUND_ME_SUCCESS:
      var busStopsResponse = action.payload;
      nextState = Object.assign( {}, state, { busStops: busStopsResponse, errors: [] } )
      console.log( 'GET BUSTOPS REDUCER SUCCES' )
      console.log( nextState )
      return nextState
    case GET_BUS_STOPS_AROUND_ME_ERROR:
      var errors = action.payload;
      nextState = Object.assign( {}, state, { busStops: {}, errors: { getBusStopsAroundMe: errors } } )
      console.log( 'GET BUSTOPS REDUCER ERROR' )
      console.log( nextState )
      return nextState
    case SET_METERS_AROUND_ME:
      nextState = Object.assign( {}, state, { meters: action.meters } );
      console.log( 'SET METERS REDUCER' )
      console.log( nextState )
      return nextState
    case SET_COORDS_AROUND_ME:
      nextState = Object.assign( {}, state, { coords: action.coords } )
      console.log( 'SET COORDS REDUCER' )
      console.log( nextState )
      return nextState
    default:
      nextState = Object.assign( {}, state )
      console.log( 'INITIAL STATE' )
      console.log( nextState )
      return nextState
  }
}

export default busStopsAroundMe;

