import React, { PropTypes } from 'react'

import BusStops from '../bus-stops/bus-stops.js';

const Results = ( { results } ) => (
    <main className='ktg-results'>
        <header className="ktg-results__header">
            <h1 className="ktg-results__title">Results</h1>
        </header>
        <BusStops className="ktg-results__content" busStops={results} />
    </main>
)

Results.propTypes = {
    results: PropTypes.arrayOf(
            PropTypes.shape( {
                distancia: PropTypes.number.isRequired,
                parada: PropTypes.object.isRequired,
                tiempos: PropTypes.array.isRequired
            } ).isRequired
        ).isRequired
}

export default Results
