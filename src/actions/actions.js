//
//  actions types
//

export const GET_BUS_STOPS_AROUND_ME_ERROR      = 'GET_BUS_STOPS_AROUND_ME_ERROR'
export const GET_BUS_STOPS_AROUND_ME_SUCCESS    = 'GET_BUS_STOPS_AROUND_ME_SUCCESS'
export const SET_METERS_AROUND_ME               = 'SET_METERS_AROUND_ME'
export const SET_COORDS_AROUND_ME               = 'SET_COORDS_AROUND_ME'
export const SET_LOADING_STATE                  = 'SET_LOADING_STATE'

//
//  actions creators
//

export const setloading = ( state ) => {
  return {
    type: SET_LOADING_STATE,
    state: state
  };
}

export const setMetersAroundMe = ( meters ) => {
  return {
    type: SET_METERS_AROUND_ME,
    meters: meters
  };
}

export const setCoordsAroundMe = ( coords ) => {
  return {
    type: SET_COORDS_AROUND_ME,
    coords: coords
  };
}

//
//  actions api
//

export const getBusStopsSucces = ( response ) => {
  return {
    type: GET_BUS_STOPS_AROUND_ME_SUCCESS,
    busStopsAroundMe: response
  };
}

export const getBusStopsError = ( error ) => {
  return {
    type: GET_BUS_STOPS_AROUND_ME_ERROR,
    error: error
  };
}
