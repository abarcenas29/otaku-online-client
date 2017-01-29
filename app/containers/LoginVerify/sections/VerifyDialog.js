import React from 'react'
import { Grid, Message, Icon } from 'semantic-ui-react'
import css from 'styled-components'

const GridStyle = css(Grid)`
  width: 100%;
`

const DialogColumn = css(Grid.Column)`
  background-color: white;
  border: 2px solid grey;
  padding: 1em;
`

function VerifyDialog ({
  errorDialogCheck,
  errorVerifyMsg
}) {
  console.log(errorDialogCheck)
  return (
    <GridStyle centered stretched>
      <Grid.Row>
        <DialogColumn
          textAlign='center'
          computer={4}
          tablet={8}
          mobile={15}
        >
          <h1>VERIFYING USER { !errorDialogCheck && <Icon name='spinner' loading /> }</h1>
          <Message negative hidden={!errorDialogCheck}>
            <Message.Header>Oops...</Message.Header>
            <p>{errorVerifyMsg}</p>
          </Message>
        </DialogColumn>
      </Grid.Row>
    </GridStyle>
  )
}

export default VerifyDialog
