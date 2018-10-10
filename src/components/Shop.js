import React, { Component } from 'react';
import Header               from './Header';
import ProductList          from './ProductList';
import data                 from '../data';

/* Components
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

  handleDeleteClick = (id) => {
    const newData = this.state.data.filter( product => product.id !== id );
    
    this.setState({
      data: newData,
    });
  }

  handleFormSubmit = (product) => {
    let item = this.state.data.find(item => item.title === product.title);
    console.log(item);
    let newData;

    if (item) {
      newData = this.state.data.map((item) => {
        if (item.title === product.title) {
          return { ...product, id: item.id };
        } else {
          return item;
        }
      });
    } else {
      product.id = this.state.data[this.state.data.length - 1].id + 1;
      newData = this.state.data.concat(product);
    }

    this.setState({
      data: newData,
    });
  }

  render() {
    return (
      <div id="app">
        <Header cart={this.state.cart} />
        <ProductList 
          data={this.state.data} 
          handleAddToCart={this.handleAddToCart} 
          handleCheckout={this.handleCheckout} 
          handleDeleteClick={this.handleDeleteClick}
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default Shop;
