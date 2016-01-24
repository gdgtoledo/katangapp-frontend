import React from 'react';

var Geolocalizer = React.createClass ({
	getInitialState: function () {
		return {
			latitude: '0',
			longitude: '0'
		};
	},
  	geolocalizeMe: function () {
  		var success = function (position) {
  			this.setState({latitude: position.coords.latitude});
  			this.setState({longitude: position.coords.longitude});
  		}.bind(this);
  		var error = function () {
  			console.log('sorry you have and error with ' + error);
  		}.bind(this);
  		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(success, error);
		} else {
		  error('geolocalization is not supported by browser');
		}
  	},
  render: function () {
    return (
      	<button type='button' className="ktg-btn--geolocalizer" onClick={this.geolocalizeMe}>
		</button>
    );
  }
});

module.exports = Geolocalizer;
