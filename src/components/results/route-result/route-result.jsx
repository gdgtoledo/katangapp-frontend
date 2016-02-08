import React from 'react';

var RouteResult = React.createClass ({
  render: function () {
    return (
      <tr className="ktg-route-result">
        <td className="ktg-route-result__id">
          Route ID
        </td>
        <td className="ktg-route-result__time">
          10 min
        </td>
      </tr>
    );
  }
});

module.exports = RouteResult;
