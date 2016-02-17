//
//  action types
//

export const REQUEST_BUS_STOPS_AROUND_ME = 'REQUEST_BUS_STOPS_AROUND_ME'

//
// other constants
//

export loadingState = false

//
//  action creators
//

export function requestBusStopsAroundMe(meters, coors) {
  return {
    type: REQUEST_BUS_STOPS_AROUND_ME,
    text: 'get all the routes and bus stops around user geolocalization',
    meters: meters,
    latitude: coors.laitude,
    longitude: coors.longitude
  }
}
