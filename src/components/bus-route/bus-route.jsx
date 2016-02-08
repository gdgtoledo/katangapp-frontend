import React from 'react';

var BusRoute = React.createClass ({
  render: function () {
    return (
      <tr>
        <td className="ktg-route-result__route-id">
          Route ID
        </td>
        <td className="ktg-route-result__route-time">
          10 min
        </td>
      </tr>
    );
  }
});

module.exports = BusRoute;
