import React from 'react'
import { Form } from 'semantic-ui-react'

function InputField ({input, meta: { touched, error, valid }, label, ...props}) {
  return (
    <Form.Input {...input} {...props} label={label} />
  )
}

export default InputField
