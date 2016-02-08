import React from 'react';

var RouteResult = require('../route-result/route-result');

var routeResults = [];

var BusStopResult = React.createClass ({
  render: function () {
    return (
      <article className="ktg-bus-stop-results">
        <header className="ktg-bus-stop-results__header">
          <h2 className="ktg-bus-stop-results__title">Bus Stop</h2>
        </header>
        <table className="ktg-bus-stop-results__routes">
          <thead>
            <tr>
              <th colSpan="2">
                <span className="ktg-bus-stop-results__bus-stop-description">Avda. de Barber</span>
                <span className="ktg-bus-stop-result__bust-stop-distance">300 meters</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {routeResults.map(function(routeResult, i){
              return <RouteResult key={i} />;
            })}
          </tbody>
        </table>
      </article>
    );
  }
});

module.exports = BusStopResult;
