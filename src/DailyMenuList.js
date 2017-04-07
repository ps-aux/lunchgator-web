import React, {Component} from 'react';
import {getMenus, getRestaurants} from './api/dailyMenuService'
import moment from 'moment'
import './style/index.css'
import DailyMenu from './DailyMenu'
import {enhance} from './reactUtils'
import Spinner from './Spinner'

class MenuList extends Component {

    constructor(props) {
        super(props)

        enhance(this)
        this.state = {
            menus: null,
            unfilteredMenus: null,
            search: ''
        }

        this.today = moment().format('EEEE LL')
    }

    componentDidMount() {
        getMenus().then(menus => {
            console.log('We have menus!')
            this.setState({menus, unfilteredMenus: menus})
        })
    }

    doSearch(e) {
        const val = e.target.value.toLowerCase()
        // Update field first for minimal delay
        this.setState({search: val})

        const menus = this.state.unfilteredMenus.filter(m => {
            return m.restaurant.name.toLowerCase().includes(val)
        })

        // Update
        this.setState({menus})
    }

    render() {
        const {menus, search} = this.state
        return (
            <section className="daily-menu-list">
                <div className="filter">
                    <div>
                        <span>Search</span>
                    </div>
                    <input value={search}
                           onChange={this.doSearch}
                           className="search"/>
                </div>
                {!menus && <Spinner/>}
                {menus && menus.map((m, i) => {
                    return <DailyMenu {...m} key={i}/>
                })}
            </section>)
    }
}

export default MenuList
