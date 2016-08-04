import { connect } from     'react-redux'
import Results from         '../components/results/results'

const mapStateToProps = ( state ) => {
    return {
        results: state.positionAroundMe.busStops
    }
}

const RenderBusStopsResults = connect(
    mapStateToProps
)( Results )

export default RenderBusStopsResults
