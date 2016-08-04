import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'

import loading from '../reducers/loading'
import positionAroundMe from '../reducers/positionAroundMe'

const reducers = combineReducers({
  loading,
  positionAroundMe,
  routing: routerReducer
})

// const reducer = combineReducers({
//   ...reducers,
//   routing: rouerReducer
// })

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store
