import React, { Component } from 'react'
import classes from './Product.module.css'
import axios from '../../axios/axios-catalog'
//import Loader from '../UI/Loader/Loader'

class Product extends Component {
  state = {
    name: '',
    description: '',
    price: 0,
    discountValue: 0,
    discountDate: '',
    image: '',
    loading: true,
  }

  onDelete = () => {}

  onEdit = () => {}

  async componentDidMount() {
    try {
      const response = await axios.get(`/products.json`)

      const product = response.data
      console.log(product)
      this.setState({
        product,
        loading: false,
      })
    } catch (e) {
      console.log(this.props)
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        {/* {this.state.loading ? (
          <Loader />
        ) : ( */}
        <div className={classes.Product}>
          <h3>{this.state.name}</h3>
          <p>{this.state.description}</p>
          <p>{this.state.price}</p>

          <button onClick={this.onDelete}>Удалить товар</button>
          <button onClick={this.onEdit}>Редактировать</button>
        </div>
        {/* )} */}
      </div>
    )
  }
}

export default Product
