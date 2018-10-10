import React, { Component } from 'react';
import Product              from './Product';
import ProductForm          from './ProductForm';

class ProductList extends Component {
  render() {
    const products = this.props.data.map(prod => (
      <Product 
        key={prod.id} 
        handleAddToCart={this.props.handleAddToCart} {...prod} 
        handleDeleteClick={this.props.handleDeleteClick} 
        handleFormSubmit={this.props.handleFormSubmit}
      />
    ));
    return (
      <div class="product-listing">
        <h2>Products</h2>
        {products}
        <ProductForm 
          handleFormSubmit={this.props.handleFormSubmit}
        />
      </div>
    );
  }
}

export default ProductList;
