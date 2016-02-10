import React from 'react';

var BusStop = require('../components/bus-stop/bus-stop');

var busStopList = [];

var Results = React.createClass ({
  render: function () {
    return (
      <articles className="ktg-bus-stops-results">
        <header className="ktg-bus-stops-results__header">
          <h1 className="ktg-bus-stops-results__title">Results</h1>
        </header>
        {busStopList.map(function(busStop, i){
          return <BusStop key={i} />;
        })}
      </articles>
    );
  }
});

module.exports = Results;
