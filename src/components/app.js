require('normalize.css');
require('./app.scss');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <main>
        Katangapp is now to start
      </main>
    );
  }
}

App.defaultProps = {
};

ReactDOM.render(<App />, document.getElementById('app'));
