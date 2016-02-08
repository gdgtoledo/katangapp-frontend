import fetch from 'isomorphic-fetch'

//
//  action types
//

export const REQUEST_BUS_STOPS_AROUND_ME = 'REQUEST_BUS_STOPS_AROUND_ME'
export const RECEIVE_BUS_STOPS_AROUND_ME = 'RECEIVE_BUS_STOPS_AROUND_ME'

//
//  action creators
//

export function requestBusStopsAroundMe(meters, coors) {
  return {
    type: REQUEST_BUS_STOPS_AROUND_ME,
    meters,
    coors
  }
}

export function receiveBusStopsAroundMe(BusStopsAroundMe) {
  return {
    type: RECEIVE_BUS_STOPS_AROUND_ME,
    BusStopsAroundMe
  }
}
 5*
