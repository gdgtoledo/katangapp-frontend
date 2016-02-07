import React from 'react';

var BusStopsList = require('../components/bus-stops-list/bus-stops-list');

var Results = React.createClass ({
  render: function () {
    return (
      <articles>
        <header className="ktg-results__header">
          <h1 className="ktg-results__title">Results</h1>
        </header>
        <BusStopsList />
      </articles>
    );
  }
});

module.exports = Results;
