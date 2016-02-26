import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/'

const reducer = combineReducers(Object.assign({}, reducers))

import Index from './containers/index.jsx'
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('app')
)
