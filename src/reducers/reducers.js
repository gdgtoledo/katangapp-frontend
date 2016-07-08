import initialState from '../stores/initialState'

import {
    SET_LOADING_STATE,
    SET_COORDS_AROUND_ME,
    SET_METERS_AROUND_ME,
    GET_BUS_STOPS_AROUND_ME_SUCCESS,
    GET_BUS_STOPS_AROUND_ME_ERROR
} from '../actions/actions.js'

//
//  reducers case by action
//

const setLoadingState = ( state = initialState, action ) => {
    let nextState
    switch ( action.type ) {
        case SET_LOADING_STATE:
            nextState = Object.assign( {}, state, { loading: action.state } );
            return nextState
        default:
            nextState = Object.assign( {}, state )
            return nextState
    }
}

const setPositionAroundMe = ( state = initialState, action ) => {
    let nextState
    switch ( action.type ) {
        case SET_LOADING_STATE:
            nextState = Object.assign( {}, state, { meters: action.meters } );
            return nextState
        case SET_METERS_AROUND_ME:
            nextState = Object.assign( {}, state, { meters: action.meters } );
            return nextState
        case SET_COORDS_AROUND_ME:
            nextState = Object.assign( {}, state, { coords: action.coords } )
            return nextState
        case GET_BUS_STOPS_AROUND_ME_SUCCESS:
        console.log( action.busStopsAroundMe );
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

export default setLoadingState
export default setPositionAroundMe
