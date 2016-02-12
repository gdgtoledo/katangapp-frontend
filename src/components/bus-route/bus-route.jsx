import React from 'react';

var BusRoute = React.createClass ({
  render: function () {
    return (
      <tr className="ktg-bus-route">
        <td className="ktg-bus-route__id">
          L61
        </td>
        <td className="ktg-bus-route__time">
          10 min
        </td>
      </tr>
    );
  }
});

module.exports = BusRoute;
