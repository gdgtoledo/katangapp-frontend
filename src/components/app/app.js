require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

var Home = require('../home/home');

var App = React.createClass ({
  render: function () {
    return (
       	<Home />
    );
  }
});

App.defaultProps = {
};

ReactDOM.render(<App />, document.getElementById('app'));
