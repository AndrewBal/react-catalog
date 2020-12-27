//import Button from '../components/UI/Button/Button'

export function createControl(config, validation) {
  return {
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: '',
  }
}

export function validateName(value, validation = null) {
  if (!validation) {
    return true
  }

  let isValid = true

  if (validation.required) {
    isValid = value.trim().length > 20 && value.trim().length < 60 && isValid
  }

  return isValid
}

export function validateDescription(value, validation = null) {
  if (!validation) {
    return true
  }

  let isValid = true

  if (validation.required) {
    isValid = value.trim().length < 200 && isValid
  }

  return isValid
}
export function validatePrice(value, validation = null) {
  if (!validation) {
    return true
  }

  let isValid = true

  if (validation.required) {
    isValid = value < 99999999.99 && value > 0 && isValid
  }

  return isValid
}
export function validateForm(formControls) {
  let isFormValid = true

  for (let control in formControls) {
    if (formControls.hasOwnProperty(control)) {
      isFormValid = formControls[control].valid && isFormValid
    }
  }

  return isFormValid
}
