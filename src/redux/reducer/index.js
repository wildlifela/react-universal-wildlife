import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import app from './appReducer'



export default combineReducers({
    app,
    routing: routerReducer,
    reduxAsyncConnect
})
