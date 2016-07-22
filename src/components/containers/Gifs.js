import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'


const gifStyle = {
    height: 'auto',
    float: 'left'
}

class Gifs extends Component {

    constructor() {
        super()
    }
    /*
     * Lifecycle
     * */

    componentWillMount() {}

    componentDidMount() {}

    componentDidUpdate() {}


    render() {
        return (
            <div>
                Here are some cool gifs!
                <div>
                    <img src="http://i.amz.mshcdn.com/rooAKLnWiKcWONpihYzSRm8J4JY=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fx-tumblrs-for-animated-gifs%2Ftumblr_m0cagsQlzP1qhcd6po1_500.gif" width="200" style={gifStyle}/>
                    <img src="http://i.amz.mshcdn.com/XQ-f5EgxEY8o74fjLad45tLPac0=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fx-tumblrs-for-animated-gifs%2FvkuRU.gif" width="200" style={gifStyle}/>
                    <img src="http://66.media.tumblr.com/26227e2458b87c736e5c23ec706405d7/tumblr_mzh7k4zgpK1qdlh1io1_250.gif" width="200" style={gifStyle}/>
                    <img src="http://66.media.tumblr.com/f3e5a3a867c285c003c66a12d9a26552/tumblr_mnu017RIjJ1s4xdz1o1_500.gif" width="200" style={gifStyle}/>
                </div>

                <Link to="/">Go Home</Link>

            </div>
        )
    }
}

export default Gifs
