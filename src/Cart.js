import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Header from './Header';

/*array.map((product, i) => {
                    console.log("product: ", product);
                    if(product.id === clickedItem.id) {
                        if (product.amount >= 1 || !product.hasOwnProperty("Amount")) {
                            return array.splice([i], 1);
                        }
                        else {
                            return array;
                        }

                    }
                    console.log("arrayen: ", array);
                    return array;

                });*/

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        console.log("componentDidMount körs");
        this.setState({
            products: JSON.parse(localStorage.getItem('order')),
        })
    }
    updateState(newArray) {
        console.log("Update körs");
        console.log(this.state.products.length);
        if(newArray.length === 0) {
          this.clearCart();
        }
        else {
            this.setState({
                products: JSON.parse(localStorage.getItem('order')),
            });
        }
    }
    clearCart() {
        localStorage.clear();
        this.setState({
            products: null
        })
    }
    render() {
        if(this.state.products !== null){

            /*Helper-function to only show one row per product*/
            let totalPrice = 0;
            this.state.products.map(product => {
                return totalPrice = totalPrice+product.Price;
            });
            let totalQty = this.state.products.length;

            function showUnique(item) {
                let hash = {};
                item.forEach((val) => {
                    const id = val.id;
                    if(hash[id]) {
                        hash[id].amount = hash[id].amount + 1;
                    }
                    else {
                        val.amount = 1;
                        hash[id] = val;
                    }
                });
                return Object.values(hash);
            }

            function removeProduct(clicked) {
                let clickedItem = clicked;
                let array = this.state.products;
                let newArray = [];
                array.forEach((product) => {
                    if(product.id !== clickedItem.id) {
                        newArray.push(product);
                    }
                });
                localStorage.setItem('order', JSON.stringify(array));
                if (localStorage.order !== []) {
                    localStorage.setItem('order', JSON.stringify(newArray));
                }
                else {
                    localStorage.clear();
                }
                this.updateState(newArray);
            }

            let cartProduct = showUnique(this.state.products).map(product => {
                return (
                    <div className="cart-product-display-div" key={product._id}>
                        <div className="cart-image-div">
                            <img className="cart-product-image" src={`http://localhost:1337${product.Image.url}`} alt=""/>
                        </div>
                        <div className="cart-brand-model-div">
                            <b>{product.Brand}</b>
                            <em>{product.Name}</em>
                        </div>
                        <div className="cart-qty-price-div">
                            <div>
                                <p>Price:</p>
                                <p>Qty:</p>
                            </div>
                            <div>
                                <em>{product.Price}</em>
                                <em>{product.amount}</em>
                            </div>
                        </div>
                        <div className="cart-tot-price-div">
                            <p>Tot. price: {product.amount * product.Price}</p>
                            <button className="remove-product-button" onClick={removeProduct.bind(this, product)}>X</button>
                        </div>
                    </div>
                )
            });
            return (
                <div>
                    <Header />
                    <div id="wrapper-cart-comp">
                        <div className="cart-div">
                            <h3>My Cart</h3>
                            <button className="clear-cart-button" onClick={this.clearCart.bind(this)}>Clear Cart</button>
                            {cartProduct}
                            <div className="cart-total-sum-div">
                                <div>
                                    <h4>Order Total</h4>
                                </div>
                                <div>
                                    <div>
                                        <p>Total Products: </p>
                                        <p>Total Price: </p>
                                    </div>
                                    <div>
                                        <em>{totalQty}</em>
                                        <em>{totalPrice}</em>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-form-div">
                            <h3>Buyer Information</h3>
                            <form className="buyer-form" action="">
                                <div>
                                    <input type="text" placeholder="First Name"/>
                                    <input type="text" placeholder="Last Name"/>
                                </div>
                                <div>
                                    <input type="number" placeholder="Phone"/>
                                    <input type="email" placeholder="E-mail"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Street"/>
                                    <input type="text" placeholder="Zip Code"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="City"/>
                                    <input type="text" placeholder="Country"/>
                                </div>
                                <div>
                                    <input type="submit" value="Place Order"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Header />
                    <div id="wrapper-cart-comp">
                        <div className="cart-div">
                            <b>There are no products in your cart</b>
                            <p>Click <NavLink className="nav-link" to={"/"}><b>HERE</b></NavLink> to see our products</p>
                        </div>
                        <div className="cart-form-div">
                            <h3>Buyer Information</h3>
                            <form className="buyer-form" action="">
                                <div>
                                    <input type="text" placeholder="First Name"/>
                                    <input type="text" placeholder="Last Name"/>
                                </div>
                                <div>
                                    <input type="number" placeholder="Phone"/>
                                    <input type="email" placeholder="E-mail"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Street"/>
                                    <input type="text" placeholder="Zip Code"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="City"/>
                                    <input type="text" placeholder="Country"/>
                                </div>
                                <div>
                                    <input type="submit" value="Place Order"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Cart;
