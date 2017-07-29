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
} from '../actions/actions.js'

const positionAroundMe = ( state = initialPositionAroundMe, action ) => {
    switch ( action.type ) {
        case SET_METERS_AROUND_ME:
            return Object.assign( {}, state, { meters: action.meters } );
        case SET_COORDS_AROUND_ME:
            return Object.assign( {}, state, { coords: action.coords } );
        case GET_BUS_STOPS_AROUND_ME_SUCCESS:
            return Object.assign( {}, state, { busStops: action.busStopsAroundMe.paradas, errors: [] } );
        default:
            return Object.assign( {}, state );
    }
};

export default positionAroundMe
