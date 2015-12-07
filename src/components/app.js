require('normalize.css');
require('styles/app.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <main>
        Katangapp is now to start
      </main>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
