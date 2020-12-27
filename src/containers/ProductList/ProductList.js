import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './ProductList.module.css'
import Product from '../../components/Product/Product'
import axios from 'axios'

export default class ProductList extends Component {
  renderProducts() {
    return [1, 2, 3].map((product, index) => {
      return (
        <li key={index}>
          <Product />
          <NavLink to={'/quiz/' + product}>Test {product}</NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <div className={classes.ProductList}>
        <div>
          <h1>Список товаров</h1>

          <ul>{this.renderProducts()}</ul>
        </div>
      </div>
    )
  }
}
