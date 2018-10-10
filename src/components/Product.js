import React, { Component } from 'react';
import ProductForm from './ProductForm';

class Product extends Component {
  state = {
    editFormOpen: false,
  }

  addToCart = () => (
    this.props.handleAddToCart(this.props.id)
  )

  deleteProduct = (productId) => (
    this.props.handleDeleteClick(this.props.id)
  )

  handleEditClick = (e) => {
    this.setState({
      editFormOpen: true,
    });
  }

  handleCancelClick = () => {
    this.setState({
      editFormOpen: false,
    });
  }

  render() {
    const formOrButton = !this.state.editFormOpen 
      ? <a className="button edit" onClick={this.handleEditClick}>Edit</a>
      : <ProductForm handleFormSubmit={this.props.handleFormSubmit} edit={true} handleCancelClick={this.handleCancelClick} {...this.props} />; 
    return (
      <div className="product">
        <div className="product-details">
          <h3>{this.props.title}</h3>
          <p className="price">{`$${this.props.price}`}</p>
          <p className="quantity">{this.props.quantity} left in stock</p>
          <div className="actions product-actions">
            <a className="button add-to-cart" onClick={this.addToCart}>Add to Cart</a>
            
          </div>
          <a 
            className="delete-button"
            onClick={this.deleteProduct}
          ><span>X</span></a>
          {formOrButton}
        </div>
      </div>
    );
  }
}

export default Product;
