import React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import css from 'styled-components'

const GridStyle = css(Grid)`
  width: 100%;
`

const DialogColumn = css(Grid.Column)`
  background-color: white;
  border: 2px solid grey;
  padding: 1em;
`

function LoginDialog ({
  fbUrl
}) {
  return (
    <GridStyle centered stretched>
      <Grid.Row>
        <DialogColumn
          textAlign='center'
          computer={4}
          tablet={8}
          mobile={15}>
          <h1>Facebook Login Test</h1>
          <a href={fbUrl}>
            <Button primary >
              LOGIN
            </Button>
          </a>
        </DialogColumn>
      </Grid.Row>
    </GridStyle>
  )
}

export default LoginDialog
