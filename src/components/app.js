require('normalize.css');
require('styles/app.css');

import React from 'react';

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
