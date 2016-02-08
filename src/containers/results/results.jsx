import React from 'react';

var BusStopsList = require('../components/bus-stops-list/bus-stops-list');

var busStopList = [];

var Results = React.createClass ({
  render: function () {
    return (
      <articles className="ktg-bus-stops-results">
        <header className="ktg-bus-stops-results__header">
          <h1 className="ktg-bus-stops-results__title">Results</h1>
        </header>
        {busStopList.map(function(busStop, i){
          return <BusStopsList key={i} />;
        })}
      </articles>
    );
  }
});

module.exports = Results;
