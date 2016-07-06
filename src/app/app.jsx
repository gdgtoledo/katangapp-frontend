import './app.scss';

import React from 'react'  // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../stores/store'

import GetBusStopsGeoState from '../containers/getBusStopsGeoState'
import RenderBusStopsResults from '../containers/renderBusStopsResults'

const history = syncHistoryWithStore( browserHistory, store )

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className='ktg-container'>
                    <Router history={history}>
                    <Route path='/' component={GetBusStopsGeoState}/>
                    <Route path="/results" component={RenderBusStopsResults}/>
                    </Router>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );
