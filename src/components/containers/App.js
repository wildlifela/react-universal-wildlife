import React, {Component, PropTypes} from 'react'

import { asyncConnect } from 'redux-connect'
import { connect } from 'react-redux'
import { actionGetAppData } from '../../redux/actions/appActions'

require('../../styles/styles.scss')




@asyncConnect([{
    promise: ({store: {dispatch, getState}}) =>  dispatch(actionGetAppData())
}])
@connect(state => ({app: state.app}))
class App extends Component {

    constructor() {
        super()
    }
    /*
     * Lifecycle
     * */

    componentWillMount() {
        console.log('component will mount')

    }

    componentDidMount() {
        console.log('component did mount')
    }

    componentDidUpdate() {
        console.log('component did updated')

    }


    render() {
        return (
            <div>
                <h1>Here is the app container for {this.props.app.name}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default App
