import React, { Component } from 'react';
import './Products.css';
import {NavLink} from 'react-router-dom';

class Products extends Component {



  render() {
      const product = this.props.product;
      let imgURL = `http://localhost:1337${product.Image.url}`;
      //console.log(imgURL);
    return (
        <div id="postdiv">
          <header className="post-header">
              <div>
                  <em>{product.Category}</em>
              </div>
              <h3 className="post-header-text">{product.Brand} <span className="post-header-model-text">{product.Name}</span></h3>
            <img src={imgURL} alt="" className="post-header-img"/>
          </header>
          <article className="post-art">
            <p className="post-art-text">{product.Description}</p>
          </article>
          <footer className="post-footer">
              <em className="price">{product.Price} SEK</em>
              <NavLink to={`/collection/${product.id}`}><button className="product-button">Go to Product</button></NavLink>
          </footer>
        </div>
    );
  }
}

export default Products;
