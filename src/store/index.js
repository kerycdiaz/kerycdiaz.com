import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

const reducer = combineReducers({ reducers });

const store = () => createStore(
  reducer,
  composeWithDevTools(applyMiddleware())
);

export default ({ element }) => (
  <Provider store={store()}>{element}</Provider>
);
