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

import timer from './timer';
import colors from '../../styles/colors';
import IconError from '../icons/error';

const BusRoute = ({ idbr, name, time }) => {
  if (timer.warning(time)) {
    var ifIconError = <IconError color={colors.auxiliary.primary} />;
  }

  let classTime = timer.style(time);
  let busTime = timer.message(time);
  let unitsTime = timer.units(time);

  return (
    <tr className="ktg-bus-route" key={idbr}>
      <td className="ktg-bus-route__name">
        {name}
      </td>
      <td className={'ktg-bus-route__time ' + classTime}>
        {ifIconError}
        <span className="ktg-bus-route__quantity-of-time">
          {busTime}
        </span>
        <span className="ktg-bus-route__unit-time">
          {unitsTime}
        </span>
      </td>
    </tr>
  );
};

BusRoute.propTypes = {
  idbr: PropTypes.number,
  name: PropTypes.string,
  time: PropTypes.number,
};

export default BusRoute;
