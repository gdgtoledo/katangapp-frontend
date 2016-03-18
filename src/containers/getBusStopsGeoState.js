import { connect } from 'react-redux'

//import { getBusStopsAroundMe } from '../actions/actions.js'
//import { getBusStops } from '../reducers/reducers.js'
import Home from '../components/home/home.js'

const mapStateToProps = ( state ) => {
  return {
    meters: state.busStopsAroundMe.meters
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    getBusStopsAroundMe: ( coors) => {
      var aroundMe = store.getState();
      dispatch( { type: 'SET_COORS_AROUND_ME', coors: coors } );
      dispatch( { type: 'GET_BUS_STOPS_AROUND_ME', coors: coors, meters: aroundMe.meters } )
    },
    setMetersAroundMe: ( meters ) => {
      dispatch( { type: 'SET_METERS_AROUND_ME', meters: meters } );
    }
  }
}

const GetBusStopsGeoState = connect(
  mapStateToProps,
  mapDispatchToProps
)( Home )

export default GetBusStopsGeoState
