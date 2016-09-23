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
import BusRoute from '../bus-route/bus-route.js';

const BusStop = ( { idbs, description, meters, routes} ) => (
    <article className="ktg-bus-stop" key={idbs}>
        <table className="ktg-bus-stop__table">
            <thead>
                <tr>
                    <th colSpan="2">
                        <span className="ktg-bus-stop__description">
                            {description}
                        </span>
                        <span className="ktg-bus-stop__distance">
                            ({meters})
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                { routes.map( route => <BusRoute key={route.idl} name={route.idl} time={route.time} />) }
            </tbody>
        </table>
    </article>
)

BusStop.propTypes = {
    routes: PropTypes.array
}

export default BusStop
