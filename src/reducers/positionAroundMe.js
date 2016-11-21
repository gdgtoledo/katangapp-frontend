/**
 *    Copyright 2016-today Software Craftmanship Toledo
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import initialPositionAroundMe from '../stores/initialPositionAroundMe'

import {
    SET_COORDS_AROUND_ME,
    SET_METERS_AROUND_ME,
    GET_BUS_STOPS_AROUND_ME_SUCCESS,
    GET_BUS_STOPS_AROUND_ME_ERROR
} from '../actions/actions.js'

const positionAroundMe = ( state = initialPositionAroundMe, action ) => {
    let nextState
    switch ( action.type ) {
        case SET_METERS_AROUND_ME:
            nextState = Object.assign( {}, state, { meters: action.meters } );
            return nextState
        case SET_COORDS_AROUND_ME:
            nextState = Object.assign( {}, state, { coords: action.coords } )
            return nextState
        case GET_BUS_STOPS_AROUND_ME_SUCCESS:
            nextState = Object.assign( {}, state, { busStops: action.busStopsAroundMe.paradas, errors: [] } )
            return nextState
        case GET_BUS_STOPS_AROUND_ME_ERROR:
            nextState = Object.assign( {}, state, { busStops: [], errors: []  } )
            return nextState
        default:
            nextState = Object.assign( {}, state )
            return nextState
    }
}

export default positionAroundMe
