import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import Allreducers from './Reducers'
import { Provider } from 'react-redux'

const store = createStore(Allreducers)

console.log(store.getState(),'state');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)