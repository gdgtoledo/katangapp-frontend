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
