import React from 'react'
import { Grid, Input, Menu } from 'semantic-ui-react'

import ItemBlock from 'components/ItemBlock'

function TableData () {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column computer={12}>
          <Menu secondary pointing color='orange'>
            <Menu.Item link active>All</Menu.Item>
            <Menu.Item link>Draft</Menu.Item>
            <Menu.Item link>Published</Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column computer={4}>
          <Input
            placeholder='Search your items'
            fluid
            icon='search' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column computer={16}>

          <Grid>
            <Grid.Row>
              <ItemBlock link='/manage/item/edit/asd' />
              <ItemBlock link='/manage/item/edit/asd' />
              <ItemBlock link='/manage/item/edit/asd' />
              <ItemBlock link='/manage/item/edit/asd' />
            </Grid.Row>
          </Grid>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default TableData
