import React from 'react';

var RouteResult = require('../route-result/route-result');

var BusStopResult = React.createClass ({
  render: function () {
    return (
    	<article>
    		<header className="ktg-bus-stop-result__header">
    			<h2 className="ktg-bus-stop-result__title">Bus Stop</h2>
    		</header>
      </article>
    );
  }
});

module.exports = BusStopResult;
