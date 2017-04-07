import React, {Component} from 'react';
import {enhance} from './reactUtils'

class Spinner extends Component {

    constructor(props) {
        super(props)
        this.state = {shown: false}

        enhance(this)
    }

    componentDidMount() {
        this.mounted = true
        setTimeout(() => {
            if (this.mounted)
                this.setState({shown: true})
        }, 500)
    }

    componentDidUnmount() {
        this.mounted = false
    }

    render() {
        return (
            <div className="spinner">
                {this.state.shown && this.renderSpinner()}
            </div>)
    }

    renderSpinner() {
        return <div>
            Yeah, your data is loading...
        </div>
    }

}

export default Spinner
