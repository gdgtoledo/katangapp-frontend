import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'

import * as reducers from '../reducers/reducers'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store
