import React, { Component } from 'react';

import './App.css';
//import { Router, Route, Switch } from 'react-router';
import Products from "./Products/Products";
import Filter from "./Filter/Filter";
import Header from './Header';
import { getSortUrl } from "./helpers"
const url = 'http://localhost:1337';

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            reviews: [],
            order: [],
            //url:""
        }
    }

    setURL(sortAndFilter) {
        const sortURL = getSortUrl(sortAndFilter);
        this.getProducts(sortURL);
    }
    componentDidMount() {
        //   skip = limit * sidnummer - limit
        console.log("componentDidMount körs");
        this.getProducts();
    }

    getProducts(sortURL) {
        if (!sortURL){
            sortURL = "";
        }
        console.log("getProducts körs");
        fetch(`${url}/collection${sortURL}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(collections => collections.json())
            .then((res) => {
                this.setState({
                    products: res,
                });
                console.log(res)
            });
    }

    boxChecked(filters) {
        this.setURL(filters);
    }
  render() {

      /*for (let x = 0; 0 < this.state.total; x++) {
          products.push(<li href="/" onClick={() => this.getProducts(x+1)}>{x+1}</li>);
      }*/
      let products = this.state.products.map((product) => {
          return <Products product={product} />
      });

    return (
        <div>
        <Header />
        <header>
        <div id="sort-and-filter-div">
                <Filter checkboxes={this.boxChecked.bind(this)}/>
            </div>
        </header>
          <div id="App-body">
            <div id="product-list">
                {products}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
