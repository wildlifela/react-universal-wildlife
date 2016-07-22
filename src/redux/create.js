import { createStore as _createStore, applyMiddleware, compose } from 'redux'
//import createMiddleware from './middleware/clientMiddleware'
import thunk from 'redux-thunk'

import { routerMiddleware } from 'react-router-redux'

export default function createStore(history, data) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(history)

  const middleware = [thunk, reduxRouterMiddleware]

  let finalCreateStore
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    const { persistState } = require('redux-devtools')
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore)
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore)
  }

  const reducer = require('./reducer')
  const store = finalCreateStore(reducer, data)


  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./reducer/', () => {
      store.replaceReducer(require('./reducer/'))
    })
  }

  return store
}
