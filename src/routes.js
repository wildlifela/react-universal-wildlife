
import React from 'react'
import {IndexRoute, Route} from 'react-router'
import Index from './components/containers/Index'
import App from './components/containers/App'
import Gifs from './components/containers/Gifs'
import NotFound from './components/containers/NotFound'




export default (store) => {


    return (
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="/gifs" component={Gifs} />

            { /* Catch all route */ }
            <Route path="*" component={NotFound} status={404} />
        </Route>
    )




}