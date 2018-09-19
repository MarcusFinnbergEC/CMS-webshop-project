import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            product: null,
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    <NavLink to={'/'} className="nav-link"><li className="nav-button">Home</li></NavLink>
                    <NavLink to={'/cart'} className="nav-link"><li className="nav-button">Cart</li></NavLink>
                </ul>
            </nav>
        );
    }
}

export default Header;