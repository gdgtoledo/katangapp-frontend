import React from 'react';
var logo = require('../../images/logo.png');

var LogoVerticalWhite = React.createClass ({
  render: function () {
    return (
    	<figure className="ktg-logo" >
		  <img className="ktg-logo__icon" src={logo} />
		  <figcaption className="ktg-logo__tipo">katanga</figcaption>
		</figure>
    );
  }
});

module.exports = LogoVerticalWhite;

