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
