import { connect } from     'react-redux'

import Results from         '../components/results/results.jsx'

const mapStateToProps = ( state ) => {
    return {
        results: state.default.busStops
    }
}

const RenderBusStopsResults = connect(
    mapStateToProps
)( Results )

export default RenderBusStopsResults
