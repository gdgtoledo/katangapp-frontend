import React from 'react';

var BusRoute = require('../bus-route/bus-route');

var busRoutes = [];

var BusStopsList = React.createClass ({
  render: function () {
    return (
      <article className="ktg-bus-stop-list">
        <header className="ktg-bus-stop-list__header">
          <h2 className="ktg-bus-stop-list__title">Bus Stop</h2>
        </header>
        <table className="ktg-bus-stop-list__routes">
          <thead>
            <tr>
              <th colSpan="2">
                  <span className="ktg-bus-stop__description">Avda. de Barber</span>
                  <span className="ktg-bus-stop__distance">300 meters</span>
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
});

module.exports = BusStopsList;
