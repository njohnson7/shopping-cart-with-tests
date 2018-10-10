import React, { Component } from 'react';


class ProductForm extends Component {
  state = { fields: {...this.props} }
  //   fields: {
  //     id: this.props.id,
  //     title: this.props.,
  //     quantity: undefined,
  //     price: undefined,
  //   }
  // }

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value, }

    this.setState({
      fields: newFields
    });
  }

  formSubmit = (e) => {
    e.preventDefault();

    this.props.handleCancelClick();
    this.props.handleFormSubmit(this.state.fields);
  }

  cancelClick = () => {
    this.props.handleCancelClick();
  }

  render() {
    return (
      <div className="add-form visible">
        <p><a className="button add-product-button">Add A Product</a></p>
        <h3>{this.props.edit ? 'Edit' : 'Add'} Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input 
              type="text" 
              id="product-name"
              name="title" 
              value={this.state.fields.title}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input 
              type="text" 
              id="product-price" 
              name="price"
              value={this.state.fields.price}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
            type="text" 
            id="product-quantity"
            name="quantity" 
            value={this.state.fields.quantity} 
            onChange={this.handleChange}
          />
          </div>

          <div className="actions form-actions">
            <a 
              id='submit-button'
              className="button"
              onClick={this.formSubmit}
            >{this.props.edit ? 'Update' : 'Add'}</a>
            <a className="button" onClick={this.cancelClick}>Cancel</a>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
