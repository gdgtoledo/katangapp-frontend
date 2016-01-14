import React from 'react';

var LogoVerticalWhite = React.createClass ({
  render: function () {
    return (
    	<figure className="ktg-logo" >
		  <img className="ktg-logo__icon" src="../../images/logo.png" />
		  <figcaption className="ktg-logo__tipo">katanga</figcaption>
		</figure>
    );
  }
});

module.exports = LogoVerticalWhite;

