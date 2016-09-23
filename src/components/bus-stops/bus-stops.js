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

import BusStop from '../bus-stop/bus-stop.js';

const BusStops = ( { busStops } ) => (
    <section className='ktg-bus-stops'>
        { busStops.map( ( busStop, id ) =>
            <BusStop
                key={id}
                description={busStop.parada.address}
                meters={busStop.distancia}
                routes={busStop.tiempos} />
        ) }
    </section>
)

BusStops.propTypes = {
    busStops: PropTypes.array
}

export default BusStops
