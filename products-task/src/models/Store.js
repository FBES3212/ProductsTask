import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component


/**
 * 
 */
class Store {
    constructor() {
        this.products = []; // Initialize an empty array when an instance of the class is created.
      }
      // Method to add an item to the array
      addItem(item) {
        this.products.push(item);
      }
      // Method to remove an item from the array
      removeItem(item) {
        const index = this.products.indexOf(item);
        if (index !== -1) {
          this.products.splice(index, 1);
        }
      }
}

// #endregion

export default Store;