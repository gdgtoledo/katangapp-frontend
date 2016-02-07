import React from 'react';

var BusRoute = React.createClass ({
  render: function () {
    return (
      <tr>
        <td className="route-id">
          Route ID
        </td>
        <td className="route-time">
          10 min
        </td>
      </tr>
    );
  }
});

module.exports = BusRoute;
