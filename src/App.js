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
                <header>
                    <h1>Lunchagator</h1>
                    <h2>today is {this.today}</h2>
                </header>
                <section className="menus">
                    {!menus && 'Loading menus'}
                    {menus && menus.map((m, i) => {
                        return <Menu {...m} key={i}/>
                    })}
                </section>
            </div>
        );
    }
}

export default App;
