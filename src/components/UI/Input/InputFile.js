import React, { Component } from 'react'
import classes from './InputFile.module.css'
import Button from '../Button/Button'

const InputFile = (props) => {
  const htmlFor = `${props.label}-${Math.random}`
  return (
    <div className={classes.InputFile}>
      <label htmlFor={htmlFor}>Добавьте картику</label>
      <input
        type="file"
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
      <Button onClick={props.onClick} type="primary">
        Загрузить
      </Button>
    </div>
  )

  // fileSelectedHandler = (event) => {
  //   this.setState({
  //     selectedFile: event.target.files[0],
  //   })
  // }

  // fileUploadHandler = () => {
  //   axios.post()
  // }
}

export default InputFile
