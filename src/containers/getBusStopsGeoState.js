import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Home from  '../components/home/home.jsx'
import store from '../stores/store'

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

      function setCoords (coords) {
        dispatch( { type: 'SET_COORDS_AROUND_ME', coords: coords } )
      }

      function getBusStopsAroundMe ( coords, meters ) {
        dispatch( { type: 'GET_BUS_STOPS_AROUND_ME', coords: coords, meters: meters } )
      }

      function goToResults ( busStopsResults, unsuscribeToStore ) {
        unsuscribeToStore()
        if ( busStopsResults.errors.length > 0 ) {
          dispatch( browserHistory.push( '/errors' ) );
        } else {
          dispatch( browserHistory.push( '/results' ) );
        }
      }

      function suscribeToStore () {
        return store.subscribe( () => {
          const searchBusStopsState = store.getState().default
          getBusStopsAroundMe( searchBusStopsState.coords, searchBusStopsState.meters );
          goToResults( searchBusStopsState );
        })
      }

      function init ( coords ) {
        let unsuscribe = suscribeToStore()
        setCoords( coords, unsuscribe )
      }

      init( coords );

    }

  }

}

const GetBusStopsGeoState = connect(
  mapStateToProps,
  mapDispatchToProps
)( Home )

export default GetBusStopsGeoState
