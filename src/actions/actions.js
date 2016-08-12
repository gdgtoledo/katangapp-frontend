//
//  actions types
//

export const GET_BUS_STOPS_AROUND_ME_ERROR      = 'GET_BUS_STOPS_AROUND_ME_ERROR'
export const GET_BUS_STOPS_AROUND_ME_SUCCESS    = 'GET_BUS_STOPS_AROUND_ME_SUCCESS'
export const SET_METERS_AROUND_ME               = 'SET_METERS_AROUND_ME'
export const SET_COORDS_AROUND_ME               = 'SET_COORDS_AROUND_ME'
export const SET_LOADING                        = 'SET_LOADING'

//
//  actions creators
//

export const setLoading = ( state ) => {
  return {
    type: SET_LOADING,
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
