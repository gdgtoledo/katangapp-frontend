import fetch from 'isomorphic-fetch'

export const REQUEST_BUS_STOPS = 'REQUEST_BUS_STOPS'
export const RECEIVE_BUS_STOPS = 'RECEIVE_BUS_STOPS'

function requestBusStops(meters, coors) {
  return {
    type: REQUEST_POSTS
  }
}

function receiveBusStops(received) {
  return {
    type: RECEIVE_POSTS
  }
}
