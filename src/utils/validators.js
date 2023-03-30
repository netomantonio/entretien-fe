import {cnpj, cpf} from 'cpf-cnpj-validator'

import PasswordValidator from 'password-validator'

export function validateEmptyAndLength3(value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }

  if (value.length < 3) {
    return '*Este campo precisa de no mínimo 3 caracteres'
  }

  return true
}

export function validateEmptyAndEmail(value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }

  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

  if (!isValid) {
    return '*Este campo precisa ser um e-mail'
  }

  return true
}

export function validateCpf(value) {
  if (!cpf.isValid(value))
    return 'cpf inválido'
  return true
}

export function validateCnpj(value) {
  if (!cnpj.isValid(value))
    return 'cnpj inválido'
  return true
}


export function validaPassword(value) {
  let schema = new PasswordValidator()

  schema
    .is().min(8)
    .is().max(64)
    .has().lowercase()
    .has().digits(4)
    .has().not().spaces()
    .has().symbols().min(2)

  let valida = schema.validate(value, {details: true})

  if (valida.length > 0) {
    return 'A senha deve conter no minimo 8 caracteres, min: 4 numeros e 2 caracter especial'
  }
  return true
}

export function validateEmptyAndLength5(value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }

  if (value.length < 5) {
    return '*Este campo precisa de no mínimo 5 caracteres'
  }

  return true
}
