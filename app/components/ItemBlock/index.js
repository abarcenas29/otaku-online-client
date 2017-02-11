/**
*
* ItemBlock
*
*/

import React from 'react'
import { Card, Image, Icon, Grid, Label } from 'semantic-ui-react'
import css from 'styled-components'

const ColumnStyles = css(Grid.Column)`
  padding-bottom: 1em;
`
const ImageStyle = css(Image)`
  border-bottom: 2px solid #F2711C;
`

const LabelStyle = css(Label)`
  margin-bottom: 0.5em !important;
`

function ItemBlock () {
  return (
    <ColumnStyles computer={4} mobile={16}>
      <Card href='http://google.com'>
        <ImageStyle src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
        <Card.Content>
          <Card.Header>
            Item Name
          </Card.Header>
          <Card.Meta>
            Location 3, Location 2
          </Card.Meta>
          <Card.Description>
            <LabelStyle color='blue' tag size='tiny'>For Rent</LabelStyle>
            <LabelStyle color='blue' tag size='tiny'>Used</LabelStyle>
            <LabelStyle color='blue' tag size='tiny'>Shipping</LabelStyle>
            <LabelStyle color='blue' tag size='tiny'>Meetup</LabelStyle>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </ColumnStyles>
  )
}

export default ItemBlock
