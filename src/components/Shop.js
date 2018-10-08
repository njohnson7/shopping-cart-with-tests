import React, { Component } from 'react';
import Header               from './Header';
import ProductList          from './ProductList';
import data                 from '../data';

/*
  - Header
    - Cart
      - CartItem
      - Checkout button
  - ProductList
    - Product
      - (AddToCartButton)
      - ProductForm / Button (edit)
    - ProductForm / Button   (add)
*/

class Shop extends Component {
  state = {
    data,
    cart: [],
  }

  handleAddToCart             =  (id) => {
    let oldItem               =  this.state.cart.find(item => item.id === id);
    let oldQuantity           =  0;
    let newCart               =  this.state.cart.filter(item => item.id !== id);
    if (oldItem) oldQuantity  =  oldItem.quantity;
    let item                  =  { ...data.find(item => item.id === id), quantity: 1 + oldQuantity };
    newCart                   =  [...newCart, item];
    this.setState({ cart: newCart });
  }

  handleCheckout = () => {
    this.setState({ cart: [] });
  }

  render() {
    return (
      <div id="app">
        <Header cart={this.state.cart} />
        <ProductList data={this.state.data} handleAddToCart={this.handleAddToCart} handleCheckout={this.handleCheckout} />
      </div>
    );
  }
}

export default Shop;
