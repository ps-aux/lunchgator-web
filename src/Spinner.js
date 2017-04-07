import React, {Component} from 'react';
import {enhance} from './reactUtils'

class Spinner extends Component {

    constructor(props) {
        super(props)

        enhance(this)
    }

    render() {
        return (
            <div className="spinner">
                <div id="cooking">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div id="area">
                        <div id="sides">
                            <div id="pan"></div>
                            <div id="handle"></div>
                        </div>
                        <div id="pancake">
                            <div id="pastry"></div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default Spinner
