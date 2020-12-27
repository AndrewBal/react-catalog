import React, { Component } from 'react'
import classes from './ProductCreator.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'
import axios from 'axios'
import {
  createControl,
  validateName,
  validateDescription,
  validateForm,
  validatePrice,
} from '../../form/formFw'

function createFormControls() {
  return {
    name: createControl(
      {
        label: 'Введите название',
        errorMessage: 'минимум 20, максимум 60 символов',
      },
      { required: true }
    ),
    image: createControl(
      {
        label: 'Добавьте изображение товара',
        errorMessage:
          'Минимальные ширина/высота фото = 200px, максимальная 4000px',
        type: 'file',
      },
      { required: true }
    ),
    description: createControl(
      {
        label: 'Описание товара',
        errorMessage: 'Описание не может быть пустым',
      },
      { required: false }
    ),
    price: createControl(
      {
        label: 'Укажите цену товара',
        errorMessage:
          'Цена не может быть отрицательной, пустой или больше 99999999.99',
        type: 'number',
      },
      { required: true }
    ),

    discountDate: createControl(
      {
        label: 'Укажите дату окончания скидки',
        errorMessage: 'Дата должна быть больше текущей даты',
        type: 'date',
      },
      { required: false }
    ),
  }
}

export default class ProductCreator extends Component {
  state = {
    discountValue: '',
    isFormValid: false,
    formControls: createFormControls(),
  }

  submitHandler = (event) => {
    event.preventDefault()
  }

  createProductHandler = (event) => {
    event.preventDefault()

    const productItem = {
      name: this.state.formControls.name.value,
      image: this.state.formControls.image.value,
      description: this.state.formControls.description.value,
      price: this.state.formControls.price.value,
      discountDate: this.state.formControls.discountDate.value,
      discountValue: this.state.discountValue,
    }

    console.log(productItem)

    axios
      .post(
        'https://react-catalog-f8902-default-rtdb.firebaseio.com/products.json',
        productItem
      )
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error))
  }

  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.touched = true
    control.value = value
    if (controlName === 'image') {
      control.valid = validateName(control.value, control.validation)
    }
    if (controlName === 'discountDate') {
      control.valid = validateName(control.value, control.validation)
    }
    if (controlName === 'name') {
      control.valid = validateName(control.value, control.validation)
    }
    if (controlName === 'description') {
      control.valid = validateDescription(control.value, control.validation)
    }
    if (controlName === 'price') {
      control.valid = validatePrice(control.value, control.validation)
    }
    formControls[controlName] = control

    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    })
  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]

      return (
        <Input
          key={index}
          type={control.type}
          label={control.label}
          value={control.value}
          valid={control.valid}
          shouldValidate={!!control.validation}
          touched={control.touched}
          errorMessage={control.errorMessage}
          onChange={(event) =>
            this.changeHandler(event.target.value, controlName)
          }
        />
      )
    })
  }

  selectChangeHandler = (event) => {
    console.log(event.target.value)
    this.setState({
      discountValue: +event.target.value,
    })
  }
  render() {
    const select = (
      <Select
        label="Выберите влияние на цену %"
        value={this.state.discountValue}
        onChange={this.selectChangeHandler}
        options={[
          { text: 0, value: 0 },
          { text: 10, value: 10 },
          { text: 20, value: 20 },
          { text: 30, value: 30 },
          { text: 40, value: 40 },
          { text: 50, value: 50 },
          { text: 60, value: 60 },
          { text: 70, value: 70 },
          { text: 80, value: 80 },
          { text: 90, value: 90 },
        ]}
      />
    )

    return (
      <div className={classes.ProductCreator}>
        <div>
          <h1>Создание товара</h1>

          <form onSubmit={this.submitHandler}>
            {this.renderControls()}

            {select}

            <Button
              type="success"
              onClick={this.createProductHandler}
              disabled={!this.state.isFormValid}
            >
              Создать товар
            </Button>
          </form>
        </div>
      </div>
    )
  }
}
