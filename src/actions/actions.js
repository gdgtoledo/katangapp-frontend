import { CALL_API } from 'redux-api-middleware'

import config from '../app/config.js'

//
//  actions types
//

export const GET_BUS_STOPS_AROUND_ME_REQUEST  = 'GET_BUS_STOPS_AROUND_ME_REQUEST'
export const GET_BUS_STOPS_AROUND_ME_SUCCESS  = 'GET_BUS_STOPS_AROUND_ME_SUCCESS'
export const GET_BUS_STOPS_AROUND_ME_ERROR    = 'GET_BUS_STOPS_AROUND_ME_ERROR'
export const SET_METERS_AROUND_ME             = 'SET_METERS_AROUND_ME'
export const SET_COORDS_AROUND_ME             = 'SET_COORDS_AROUND_ME'

//
//  actions creators
//

export function setMetersAroundMe( meters ) {
  return {
    type: SET_METERS_AROUND_ME,
    meters: meters
  };
}

export function setCoordsAroundMe( coords ) {
  return {
    type: SET_COORDS_AROUND_ME,
    coords: coords
  };
}

/*export function getBusStopsAroundMe( coords, meters ) {
  return {
    type: GET_BUS_STOPS_AROUND_ME,
    meters: meters,
    coords: coords
  };
}*/

export function getBusStopsAroundMe( coords, meters ) {
  console.log('get bus stops around me middleware dispatch');
  console.log('enpoint: ' + config.api.protocol + config.api.domain + '/' + config.api.endpoints.busStops +
                '?lt=' + coords.latitude + '&ln=' + coords.longitude + '&r=' + meters );
  return {
    [CALL_API]: {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      method: 'GET',
      types: ['GET_BUS_STOPS_AROUND_ME_REQUEST', 'GET_BUS_STOPS_AROUND_ME_SUCCESS', 'GET_BUS_STOPS_AROUND_ME_FAILURE'],
      endpoint: config.api.protocol + config.api.domain + '/' + config.api.endpoints.busStops +
                '?lt=' + coords.latitude + '&ln=' + coords.longitude + '&r=' + meters
    }
  }
}

