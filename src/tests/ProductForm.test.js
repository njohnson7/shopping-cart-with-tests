import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ProductForm from '../components/ProductForm';

describe('ProductForm', () => {
  it('submits form when add/update button is clicked', () => {
    const myFunc = jest.fn();
    const wrapper = shallow(<ProductForm handleFormSubmit={myFunc} handleCancelClick={myFunc} />);
    const submitButton = wrapper.find('#submit-button')
    submitButton.simulate('click', {
      preventDefault: Function.prototype,
    });

    expect(
      myFunc.mock.calls.length
    ).toEqual(2);
  });
});
