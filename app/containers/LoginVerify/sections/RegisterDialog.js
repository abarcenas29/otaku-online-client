import React from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'
import css from 'styled-components'

const GridStyle = css(Grid)`
  width: 100%;
`

const DialogColumn = css(Grid.Column)`
  background-color: white;
  border: 2px solid grey;
  padding: 1em;
`

function RegisterDialog () {
  return (
    <GridStyle centered stretched>
      <Grid.Row>
        <DialogColumn
          computer={4}
          tablet={8}
          mobile={15}
        >
          <h1>Register New User</h1>
          <Form>
            <Form.Input label='Facebook ID' />
            <Form.Input label='Name' />
            <Form.Input label='Email' />
            <Form.Input label='Mobile No' />
            <Button type='submit' primary>
              REGISTER
            </Button>
          </Form>
        </DialogColumn>
      </Grid.Row>
    </GridStyle>
  )
}

export default RegisterDialog
