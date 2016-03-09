import { connect } from 'react-redux'

import { getBusStopsAroundMe } from '../actions/actions.js'
//import { getBusStops } from '../reducers/reducers.js'
import { Home } from '../components/home/home.jsx'

const mapStateToProps = ( state ) => {
  return {
    busStopsAroundMe: {
      metters: state.aroundMe.meters,
      coors: state.aroundMe.coors
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
