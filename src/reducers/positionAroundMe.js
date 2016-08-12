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
            nextState = Object.assign( {}, state, { busStops: {}, errors: []  } )
            return nextState
        default:
            nextState = Object.assign( {}, state )
            return nextState
    }
}

export default positionAroundMe
