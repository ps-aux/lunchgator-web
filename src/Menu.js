import React, {Component} from 'react';
import {getMenus} from './api/dailyMenuService'
import moment from 'moment'
import './App.css';

const Menu = ({restaurant, items}) => {
    return <div>
        <div className="restaurant">
            {restaurant.name}
        </div>
        <div className="food">
            {items.map((item, i) => {
                return <div key={i}>
                    <span className="name">{item.name}</span>
                    <span className="price">{item.price} EUR</span>
                </div>
            })}
        </div>
    </div>
}

export default Menu;
