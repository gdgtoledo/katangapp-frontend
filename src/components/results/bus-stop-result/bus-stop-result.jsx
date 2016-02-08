import React from 'react';

var RouteResult = require('../route-result/route-result');

var BusStopResult = React.createClass ({
  render: function () {
    return (
      <article>
        <header className="ktg-bus-stop-result__header">
          <h2 className="ktg-bus-stop-result__title">Bus Stop</h2>
        </header>
        <table id="route-results">
          <thead>
            <tr>
              <th colSpan="2">
                Route Description
              </th>
            </tr>
          </thead>
          <tbody>
            <RouteResult />
          </tbody>
        </table>
      </article>
    );
  }
});

module.exports = BusStopResult;
