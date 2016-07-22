import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from './routes'
import {Provider} from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { ReduxAsyncConnect } from 'redux-connect'

import createStore from './redux/create'


const contentContainer = document.getElementById('content')
const store = createStore(browserHistory, window.__data)
const history = syncHistoryWithStore(browserHistory, store)

window.fetch = global.fetch = require('isomorphic-fetch')
window.Promise = window.Promise || require('promise-polyfill')


function renderAsyncConnect(props) {
    return <ReduxAsyncConnect {...props}  />
}

const component = (
    <Router render={renderAsyncConnect} history={history}>
        {getRoutes(store)}
    </Router>
)

ReactDOM.render(
    <Provider store={store} key="provider">
        {component}
    </Provider>,
    contentContainer
)

if (process.env.NODE_ENV !== 'production') {
    window.React = React // enable debugger

    if (!contentContainer || !contentContainer.firstChild || !contentContainer.firstChild.attributes || !contentContainer.firstChild.attributes['data-react-checksum']) {
        console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.')
    }
}
