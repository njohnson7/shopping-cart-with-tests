import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
  calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }

  render() {
    const items = this.props.items.map(itemData => <CartItem {...itemData} />);
    return (
      <div class="cart">
        <h2>Your Cart</h2>
        <table class="cart-items">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>

          {items}

          <tr>
            <td colspan="3" class="total">Total: ${this.calculateTotal(this.props.items)}</td>
          </tr>
        </table>
        <a class="button checkout" onClick={this.props.handleCheckout}>Checkout</a>
      </div>
    );
  }
}

export default Cart;
