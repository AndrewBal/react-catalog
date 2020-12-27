import React, { Component } from 'react'
import classes from './Product.module.css'

class Product extends Component {
  state = {
    id: 1,
    name: 'Имя товара',
    description: 'Описание товара',
    price: 120 + ' грн',
    discount: {
      include: false,
      discountValue: '10%',
      discountDate: '2021-01-01',
    },
    image: '',
  }

  onDelete = () => {}

  onEdit = () => {}

  render() {
    return (
      <div className={classes.Product}>
        <h3>Product name{this.state.name}</h3>
        <p>{this.state.description}</p>
        <p>{this.state.price}</p>

        <button onClick={this.onDelete}>Удалить товар</button>
        <button onClick={this.onEdit}>Редактировать</button>
      </div>
    )
  }
}

export default Product
