import { createStore, applyMiddleware, combineReducers } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import { routerReducer } from 'react-router-redux'

import * as reducers from '../reducers/reducers'
import initialState from './initialState'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

function configureStore (initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}

const store = configureStore(initialState)

export default store

