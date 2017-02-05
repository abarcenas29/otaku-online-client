import React from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'
import css from 'styled-components'

import { reduxForm, Field } from 'redux-form/immutable'

import InputField from './../reduxform/InputField'

const GridStyle = css(Grid)`
  width: 100%;
`

const DialogColumn = css(Grid.Column)`
  background-color: white;
  border: 2px solid grey;
  padding: 1em;
`

function RegisterDialog ({
  submitting,
  handleSubmit,
  submitNewUser,
  valid
}) {
  return (
    <GridStyle centered stretched>
      <Grid.Row>
        <DialogColumn
          computer={4}
          tablet={8}
          mobile={15}
        >
          <h1>Register New User</h1>
          <Form onSubmit={handleSubmit(submitNewUser)}>
            <Field
              name='fbid'
              component={InputField}
              readOnly
              label='Facebook ID'
            />
            <Field
              name='name'
              component={InputField}
              label='Name'
            />
            <Field
              name='email'
              component={InputField}
              label='Email'
            />
            <Field
              name='mobile_no'
              component={InputField}
              label='Mobile No'
            />
            <Button type='submit' primary>
              REGISTER
            </Button>
          </Form>
        </DialogColumn>
      </Grid.Row>
    </GridStyle>
  )
}

function validate (values) {
  const errors = {}
  return errors
}

const RegisterDialogReduxForm = reduxForm({
  form: 'RegisterUserForm',
  enableReinitialize: true,
  validate
})(RegisterDialog)

export default RegisterDialogReduxForm
