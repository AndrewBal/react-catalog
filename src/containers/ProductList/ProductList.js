import React, { Component } from 'react'
//import { NavLink } from 'react-router-dom'
import classes from './ProductList.module.css'
import Product from '../../components/Product/Product'
import axios from '../../axios/axios-catalog'
//import Loader from '../../components/UI/Loader/Loader'

export default class ProductList extends Component {
  state = {
    products: [],
    loading: true,
    name: '',
  }

  renderProducts() {
    return this.state.products.map((product) => {
      return (
        <li key={product.id}>
          <Product />
          {/* <NavLink to={'/product/' + product.id}> {product.name}</NavLink> */}
        </li>
      )
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/products.json')

      //console.log(response.data)

      const products = []
      Object.keys(response.data).forEach((key, index) => {
        products.push({
          id: key,
          index: `Товар №${index}`,
          description: response.data[key].description,
        })
      })

      this.setState({
        products,
        loading: false,
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className={classes.ProductListWrapper}>
        <h1>Список товаров</h1>
        <div className={classes.ProductList}>
          {this.renderProducts()}

          {/* {this.state.loading ? <Loader /> : } */}
        </div>
      </div>
    )
  }
}
