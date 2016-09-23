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

import React from 'react';

var BusRoute = require('../bus-route/bus-route');

var busRoutes = [new BusRoute, new BusRoute];

export default class BusStop extends React.Components {

    render() {
        return (
            <article className="ktg-bus-stop">
                <header className="ktg-bus-stop__header">
                    <h2 className="ktg-bus-stop__title">Bus Stop</h2>
                </header>
                <table className="ktg-bus-stop__routes">
                    <thead>
                        <tr>
                            <th colSpan="2">
                                <span className="ktg-bus-stop__description">
                                Avda. de Barber
                                </span>
                                <span className="ktg-bus-stop__distance">
                                300 meters
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {busRoutes.map(function(busRoute, i){
                            return <BusRoute key={i} />;
                        })}
                    </tbody>
                </table>
            </article>
        );
    }

}
