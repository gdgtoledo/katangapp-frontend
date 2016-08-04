import { browserHistory } from  'react-router'

import store from   '../stores/store'

const goToResults = ( dispatch ) => {
    let currentState = store.getState()
    console.log(currentState);
    if ( currentState.positionAroundMe.errors.length > 0 && currentState.positionAroundMe.busStops.length > 0 ) {
        dispatch( browserHistory.push( '/errors' ) )
    } else {
        dispatch( browserHistory.push( '/results' ) )
    }
}

export default goToResults
