import React from 'react'
import { Grid, Button } from 'semantic-ui-react'

import ItemBlock from 'components/ItemBlock'

function ItemContainer () {
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column computer={12} mobile={16}>
          <p>AAA count</p>
        </Grid.Column>
        <Grid.Column computer={4} mobile={16} textAlign='right'>
          <Button.Group>
            <Button icon='block layout' active />
            <Button icon='list layout' disabled />
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <ItemBlock link='/item/asd' />
        <ItemBlock link='/item/asd' />
      </Grid.Row>
    </Grid>
  )
}

export default ItemContainer
