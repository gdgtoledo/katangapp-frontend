import { connect } from 'react-redux'

import { getBusStopsAroundMe } from '../actions/actions.js'
//import { getBusStops } from '../reducers/reducers.js'
import Home from '../components/home/home.jsx'

const mapStateToProps = ( state ) => {
  return {
    busStopsAroundMe: {
      meters: state.busStopsAroundMe.meters,
      coors: state.busStopsAroundMe.coors
    }
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    getBusStopsAroundMe: ( coors, meters ) => {
      dispatch( getBusStopsAroundMe( coors, meters ) )
    }
  }
}

const GetBusStopsGeoState = connect(
  mapStateToProps,
  mapDispatchToProps
)( Home )

export default GetBusStopsGeoState
