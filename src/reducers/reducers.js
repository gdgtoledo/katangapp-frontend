import { initialState } from '../stores/stores.js';
import { REQUEST_BUS_STOPS_AROUND_ME } from '../actions/actions.js'

//
//  reducers case by action
//

export function busStopsAroundMe( state=initialState, action ) {
  switch ( action.type ) {
    case REQUEST_BUS_STOPS_AROUND_ME:
      return  action.busStopsAroundMe;
    default:
      return state;
  }
}
