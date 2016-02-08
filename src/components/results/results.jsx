import React from 'react';

var BusStopResult = require('./bus-stop-result/bus-stop-result');

var busStopResults = [];

var Results = React.createClass ({
  render: function () {
    return (
      <articles>
        <header className="ktg-results__header">
          <h1 className="ktg-results__title">Results</h1>
        </header>
        {busStopResults.map(function(busStopResult, i){
          return <BusStopResult key={i} />;
        })}
      </articles>
    );
  }
});

module.exports = Results;
