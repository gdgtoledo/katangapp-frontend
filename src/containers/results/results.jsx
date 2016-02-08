import React from 'react';

var BusStopsList = require('../components/bus-stops-list/bus-stops-list');

var busStopList = [];

var Results = React.createClass ({
  render: function () {
    return (
      <articles>
        <header className="ktg-results__header">
          <h1 className="ktg-results__title">Results</h1>
        </header>
        {busStopList.map(function(busStop, i){
          return <BusStopsList key={i} />;
        })}
      </articles>
    );
  }
});

module.exports = Results;
