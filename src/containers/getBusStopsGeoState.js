import { connect } from           'react-redux'
import { browserHistory } from    'react-router'
import Promise from               'promise-polyfill'

import getBusStopsAroundMe from   '../services/busStops.js'
import Home from                  '../components/home/home.jsx'
import store from                 '../stores/store'

const goToResults = ( dispatch ) => {
    let busStopsResults = store.getState().default
    if ( busStopsResults.errors.length > 0 ) {
        dispatch( browserHistory.push( '/errors' ) )
    } else {
        dispatch( browserHistory.push( '/results' ) )
    }
}

const setCoordsInStore = ( dispatch, coords ) => {
    return new Promise ( ( resolve ) => {
        let unsuscribe = store.subscribe( () => {
            resolve( { coords: store.getState().default.coords, meters: store.getState().default.meters } );
            unsuscribe();
        })
        dispatch( { type: 'SET_COORDS_AROUND_ME', coords: coords } )
    });
}

const setCoordsAndGetBusStops = ( coords ) => {
    return dispatch => {
        return setCoordsInStore( dispatch, coords ).then(
            position => {
                dispatch( getBusStopsAroundMe( { coords: position.coords, meters: position.meters } ) )
                let unsuscribe = store.suscribe( () => {
                    goToResults( dispatch );
                    unsuscribe();
                })
            }
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        meters: state.default.meters,
        coords: state.default.coords
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        setMetersAroundMe: ( meters ) => {
            dispatch( { type: 'SET_METERS_AROUND_ME', meters: meters } );
        },
        getBusStopsAroundMeAndGoToResults: ( coords ) => {
            dispatch( setCoordsAndGetBusStops( coords ) )
        }
    }
}

const GetBusStopsGeoState = connect(
    mapStateToProps,
    mapDispatchToProps
)( Home )

export default GetBusStopsGeoState
