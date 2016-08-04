import initialLoading from '../stores/initialLoading'

import {
    SET_LOADING
} from '../actions/actions.js'

const loading = ( state = initialLoading, action ) => {
    let nextState
    switch ( action.type ) {
        case SET_LOADING:
            nextState = Object.assign( {}, state, { state: action.state } );
            return nextState
        default:
            nextState = Object.assign( {}, state )
            return nextState
    }
}

export default loading
