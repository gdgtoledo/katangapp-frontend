/**
 *    Copyright 2016-today Software swcraftersclm
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
import PropTypes from 'prop-types';

import BusRoute from '../bus-route/bus-route';
import colors from '../../styles/colors';
import IconBusStop from '../icons/busStop';

const BusStop = ({ idbs, description, meters, routes }) =>
  <article className="ktg-bus-stop" key={idbs}>
    <table className="ktg-bus-stop__table">
      <thead className="ktg-bus-stop__header">
        <tr>
          <th colSpan="2">
            <div className="ktg-bus-stop__icon">
              <IconBusStop
                circleFillColor={colors.quaternary}
                circleBorderColor={colors.grey.light.twenty}
                busColor={colors.grey.light.twenty}
              />
            </div>
            <div className="ktg-bus-stop__info">
              <span className="ktg-bus-stop__description">
                {description}
              </span>
              <span className="ktg-bus-stop__distance">
                A {Math.round(meters)} metros de tí
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="ktg-bus-stop__body">
        {routes.map(route => <BusRoute key={route.idl} name={route.idl} time={route.time} />)}
      </tbody>
    </table>
  </article>;

BusStop.propTypes = {
  idbs: PropTypes.number,
  description: PropTypes.string,
  meters: PropTypes.number,
  routes: PropTypes.array,
};

export default BusStop;
