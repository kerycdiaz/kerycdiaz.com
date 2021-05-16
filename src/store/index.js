import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '@store/reducers'

const reducer = combineReducers({ reducers })

const store = () => createStore(reducer, composeWithDevTools(applyMiddleware()))

const Store = ({ children }) => {
  return <Provider store={store()}>{children}</Provider>
}
export default Store
