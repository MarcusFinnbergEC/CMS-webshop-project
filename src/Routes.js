import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import App from './App';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/collection/:id" component={SingleProduct}/>
                    <Route path="/cart" component={Cart} />
                    <Route path="/" component={App}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;