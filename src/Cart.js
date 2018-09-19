import React, { Component } from 'react';
import Header from './Header';

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
    clearCart() {

    }
    render() {
        if(this.state.products){

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

            let cartProduct = showUnique(this.state.products).map(product => {
                return (
                    <div className="cart-product-display-div" key={product.id}>
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
                        </div>
                    </div>
                )
            });
            return (
                <div>
                    <Header />
                    <div id="wrapper-cart-comp">
                        <div className="cart-div">
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
                                <input type="text" placeholder="First Name"/>
                                <input type="text" placeholder="Last Name"/>
                                <input type="number" placeholder="Phone"/>
                                <input type="email" placeholder="E-mail"/>
                                <input type="text" placeholder="Street"/>
                                <input type="text" placeholder="Zip Code"/>
                                <input type="text" placeholder="City"/>
                                <input type="text" placeholder="Country"/>
                                <input type="submit" value="Place Order"/>
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
                        </div>
                        <div className="cart-form-div">
                            <h3>Buyer Information</h3>
                            <form className="buyer-form" action="">
                                <input type="text" placeholder="First Name"/>
                                <input type="text" placeholder="Last Name"/>
                                <input type="number" placeholder="Phone"/>
                                <input type="email" placeholder="E-mail"/>
                                <input type="text" placeholder="Street"/>
                                <input type="text" placeholder="Zip Code"/>
                                <input type="text" placeholder="City"/>
                                <input type="text" placeholder="Country"/>
                                <input type="submit" value="Place Order"/>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Cart;
