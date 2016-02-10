import React from 'react';

var LogoVerticalWhite = require('../../components/logo/logo');
var Geolocalizer = require('../../components/geolocalizer/geolocalizer');
var Slider = require('../../components/slider/slider');
var Results = require('../results/results');

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
        <Results />
      </main>
    );
  }
});

module.exports = Home;
