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
