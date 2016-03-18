import './app.scss';

import React from 'react'  // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'

import * as reducers from '../reducers/reducers.js'

import GetBusStopsGeoState from '../containers/getBusStopsGeoState.js'

import Loading from '../components/loading/loading.jsx'
import Results from '../components/results/results.jsx'

const katangapp = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(katangapp)

const history = syncHistoryWithStore( browserHistory, store )

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='ktg-container'>
          <Router history={history}>
            <Route path='/' component={GetBusStopsGeoState}/>
            <Route path="loading" component={Loading}/>
            <Route path="results" component={Results}/>
          </Router>
        </div>
      </Provider>
   );
  }
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );
