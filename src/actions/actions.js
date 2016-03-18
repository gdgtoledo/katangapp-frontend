//
//  actions types
//

export const GET_BUS_STOPS_AROUND_ME  = 'GET_BUS_STOPS_AROUND_ME'
export const SET_METERS_AROUND_ME     = 'SET_METERS_AROUND_ME'
export const SET_COORS_AROUND_ME      = 'SET_COORS_AROUND_ME'

//
//  actions creators
//

export function setMetersAroundMe( meters ) {
  return {
    type: SET_METERS_AROUND_ME,
    meters: meters
  };
}

export function setCoorsAroundMe( coors ) {
  return {
    type: SET_COORS_AROUND_ME,
    coors: coors
  };
}

export function getBusStopsAroundMe( coors, meters ) {
  return {
    type: GET_BUS_STOPS_AROUND_ME,
    meters: meters,
    coors: coors
  };
}

