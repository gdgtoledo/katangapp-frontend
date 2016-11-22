import { connect } from             'react-redux'
import Promise from                 'promise-polyfill'

import appi from                    '../../services/appi.js'
import goToResults from             '../../router/router.js'
import Home from                    '../components/home/home.jsx'
import store from                   '../../stores/store'

const getBusStopsAroundMeAndGoToResults = ( dispatch, position ) => {
    return appi.busStops.aroundme.fetch( position )
        .then( response => {
            return response.json();
        } )
        .then( busStops => {
            dispatch( { type: 'GET_BUS_STOPS_AROUND_ME_SUCCESS', busStopsAroundMe: busStops } )
        } )
        .then ( () => {
            goToResults( dispatch )
            dispatch( { type: 'SET_LOADING', state: false } );
        } )
        .catch( error => {
            //dispatch( { type: 'GET_BUS_STOPS_AROUND_ME_ERROR', error: error } )
            throw error
        } )
}

const setCoordsInStore = ( dispatch, coords ) => {
    return new Promise ( ( resolve ) => {
        let unsuscribe = store.subscribe( () => {
            resolve( { coords: store.getState().positionAroundMe.coords, meters: store.getState().positionAroundMe.meters } )
            unsuscribe()
        } )
        dispatch( { type: 'SET_COORDS_AROUND_ME', coords: coords } )
    } )
}

const setCoordsGetBusStopsAndGoToResults = ( coords ) => {
    return dispatch => {
        return setCoordsInStore( dispatch, coords )
            .then( position => {
                getBusStopsAroundMeAndGoToResults( dispatch, { coords: position.coords, meters: position.meters } )
            } )
            .catch( error => {
                throw error
            } )
    }
}

const mapStateToProps = ( state ) => {
    return {
        meters: state.positionAroundMe.meters,
        coords: state.positionAroundMe.coords,
        loading: state.loading.state
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        setLoading: (isLoading) => {
            dispatch( { type: 'SET_LOADING', state: isLoading } );
        },
        setMetersAroundMe: ( meters ) => {
            dispatch( { type: 'SET_METERS_AROUND_ME', meters: meters } );
        },
        getBusStopsAroundMe: ( coords ) => {
            dispatch( setCoordsGetBusStopsAndGoToResults( coords ) )
        }
    }
}

const GetBusStopsGeoState = connect(
    mapStateToProps,
    mapDispatchToProps
)( Home )

export default GetBusStopsGeoState
