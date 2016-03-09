import { routeActions } from 'react-router-redux';
import fetch from 'isomorphic-fetch';

//
//  actions types
//

export const REQUEST_BUS_STOPS_AROUND_ME = 'REQUEST_BUS_STOPS_AROUND_ME'

//
//  actions helpers
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
          meters: meters,
          coors: coors,
          busStops: {},
          error: {
            type: response.status,
            message: response.message
          }
        }
      }
      dispatch( routeActions.push( '/results' ) );
      return {
        meters: meters,
        coors: coors,
        busStops: response.json(),
        error: {}
      }
    })
}

//
//  actions creators
//

export function getBusStopsAroundMe( coors, meters ) {
  var busStopsApiResponse = requestBusStopsAroundMe( coors, meters );
  return {
    type: REQUEST_BUS_STOPS_AROUND_ME,
    busStopsAroundMe: busStopsApiResponse
  };
}
