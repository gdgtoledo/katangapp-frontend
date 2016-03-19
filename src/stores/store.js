import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as reducers from '../reducers/reducers'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(reducer)

console.log( 'CREATE STORE' );
console.log( store );

export default store

