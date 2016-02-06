import React from 'react';

var LogoVerticalWhite = require('../logo/logo');
var Geolocalizer = require('../geolocalizer/geolocalizer');
var Slider = require('../slider/slider');

var Home = React.createClass ({
  getInitialState: function () {
    return {
      meters: "50"
    }
  },
  updateMeters: function (meters) {
    this.setState({meters: meters});
  },
  render: function () {
    return (
    	<main className="ktg-home">
    		<header className="ktg-home__header">
        <LogoVerticalWhite />
    		</header>
        <form id="ktg-form-metersAround">
      	 <Slider meters={this.state.meters} updateMeters={this.updateMeters}/>
         <Geolocalizer />
        </form>
      </main>
    );
  }
});

module.exports = Home;