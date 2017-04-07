import React, {Component} from 'react';
import {getMenus} from './api/dailyMenuService'
import moment from 'moment'

const Menu = ({restaurant, items}) => {
    return <div className="daily-menu">
        <h1 className="restaurant">
            <a href={restaurant.url} target="_blank">
                {restaurant.name}
            </a>
        </h1>
        <div className="dishes">
            {items.map((item, i) => {
                return <div className="dish" key={i}>
                    <div className="name">{item.name}</div>
                    <div className="price">{item.price} €</div>
                </div>
            })}
        </div>
    </div>
}

export default Menu;
