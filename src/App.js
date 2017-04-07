import React, {Component} from 'react';
import {getMenus, getRestaurants} from './api/dailyMenuService'
import moment from 'moment'
import './style/index.css'
import DailyMenuList from './DailyMenuList'
import {enhance} from './reactUtils'


class App extends Component {

    constructor(props) {
        super(props)

        enhance(this)
        this.today = moment().format('LL')
    }

    componentDidMount() {
        getMenus().then(menus => {
            console.log('We have menus')
            this.setState({menus})
        })
    }

    render() {
        return (
            <div className="app">
                <header>
                    <h1>Lunchagator</h1>
                    <h2>today is {this.today}</h2>
                </header>
                <DailyMenuList/>
            </div>
        );
    }
}

export default App;
