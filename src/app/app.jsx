/**
 *    Copyright 2016-today Software Craftmanship Toledo
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import './app.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from '../stores/store'

import IntroToKatanga from './containers/introToKatanga'
import GetBusStopsGeoState from './containers/getBusStopsGeoState'
import RenderBusStopsResults from './containers/renderBusStopsResults'

const history = syncHistoryWithStore( browserHistory, store )

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className='ktg-container'>
                    <Router history={history}>
                        <Route path='/' component={IntroToKatanga}/>
                        <Route path='/home' component={GetBusStopsGeoState}/>
                        <Route path="/results" component={RenderBusStopsResults}/>
                    </Router>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );
