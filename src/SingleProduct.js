import React, { Component } from 'react';
import Reviews from './Reviews';
import Header from './Header';

class SingleProduct extends Component {
    constructor() {
        super();
        this.state = {
            product: null,
        }
    }

    addToCart() {
        let productsInCart = JSON.parse(localStorage.getItem("order")) || [];
        const item = this.state.product;
        productsInCart.push(item);
        localStorage.setItem('order', JSON.stringify(productsInCart));
    }

    componentDidMount()
    {
        const id = this.props.match.params.id;
        fetch(`http://localhost:1337/collection/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(collections => collections.json())
            .then((res) => {
                this.setState({
                    product: res,
                });
                console.log(res)
            });
    }

    render()
    {
        console.log("render single product");
        const myProduct = this.state.product;
        if (!myProduct) {
            return null;
        }
        console.log("console log", myProduct);
        let imgURL = `http://localhost:1337${myProduct.Image.url}`;
        return (
            <div>
                <Header/>
                <div id="single-product">
                    <div id="single-product-div">
                        <header className="post-header-single">
                            <div>
                                <h3 className="post-header-text-single">{myProduct.Brand} <span
                                    className="post-header-model-text-single">{myProduct.Name}</span></h3>
                                <p>Category: {myProduct.Category}</p>
                                <p className="post-art-text-single">{myProduct.Description}</p>
                                <div>
                                    <p className="price">{myProduct.Price} SEK</p>
                                    <button onClick={this.addToCart.bind(this)} className="product-button">Add to Cart</button>
                                    <p>In Stock: <em>{myProduct.Availability}</em></p>
                                </div>
                            </div>
                            <div>
                                <img src={imgURL} alt="" className="post-header-img-single"/>
                            </div>
                        </header>

                    </div>
                    <div className="add-and-review-div">
                        <Reviews id={this.props.match.params.id}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default SingleProduct;

