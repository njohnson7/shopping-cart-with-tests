import React, { Component } from 'react';
import Cart from './Cart'

class Header extends Component {
  render() {
    return (
      <div id="header">
        <h1>The Shop!</h1>
        <Cart items={this.props.cart} handleCheckout={this.props.handleCheckout} />
      </div>
    );
  }
}

export default Header;
