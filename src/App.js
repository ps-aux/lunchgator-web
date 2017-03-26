import React, {Component} from 'react';
import {getMenus} from './api/dailyMenuService'
import moment from 'moment'
import './App.css';
import Menu from './Menu'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {menus: null}

        this.today = moment().format('LL')
    }

    componentDidMount() {
        getMenus().then(menus => {
            console.log('We have menus')
            this.setState({menus})
        })
    }

    render() {
        const {menus} = this.state
        return (
            <div className="app">
                <div>Today is {this.today}</div>
                <div>On the menu is:</div>
                {!menus && 'Loading menus'}
                {menus && menus.map((m, i) => {
                    return <Menu {...m} key={i}/>
                })}
            </div>
        );
    }
}

export default App;
