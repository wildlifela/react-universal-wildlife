import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'


class Index extends Component {

    constructor() {
        super()
    }
    /*
     * Lifecycle
     * */

    componentWillMount() {
    }

    componentDidMount() {}

    componentDidUpdate() {}


    render() {
        return (
            <div>
                Index!
                <Link to="/gifs">See some gifs</Link>
            </div>
        )
    }
}

export default Index
