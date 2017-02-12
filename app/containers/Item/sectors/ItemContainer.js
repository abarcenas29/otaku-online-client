import React from 'react'
import {
  Button,
  Grid,
  Header,
  Image,
  Message,
  Menu,
  Icon,
  List
} from 'semantic-ui-react'
import css from 'styled-components'

import AvatarBox from 'components/AvatarBox'
import ItemBlock from 'components/ItemBlock'

const ItemContainerStyle = css(Grid.Column)`
  background-color: #FFF;
  padding: 1em;
`

const ItemQickInfo = css.div`
  margin-top: 2em;
`

const ImageGalleryContainer = css.div`
  margin: 1em 0;
  display: flex;
  justify-content: center;
`

const DescriptionContainer = css.div`
  display: block;
  padding: 1em;
`

const HeaderStyle = css(Header)`
  margin: 1em 0 !important;
  text-transform: uppercase;
`

function ItemContainer () {
  return (
    <Grid centered padded>
      <Grid.Row>
        <ItemContainerStyle computer={14} mobile={16}>

          <Grid padded>
            <Grid.Row>
              <Grid.Column computer={16}>
                <Header as='h1'>This is an item name</Header>
              </Grid.Column>
              <Grid.Column computer={11} mobile={16}>
                <Image
                  label={{color: 'black', content: '₱ 9,999', ribbon: true, size: 'huge'}}
                  src='http://placehold.it/800x600'
                />
                <ImageGalleryContainer>
                  <Image.Group size='tiny'>
                    <Image src='http://placehold.it/200x200' />
                    <Image src='http://placehold.it/200x200' />
                    <Image src='http://placehold.it/200x200' />
                    <Image src='http://placehold.it/200x200' />
                    <Image src='http://placehold.it/200x200' />
                  </Image.Group>
                </ImageGalleryContainer>
              </Grid.Column>
              <Grid.Column computer={5} mobile={16}>
                <AvatarBox />
                <ItemQickInfo>
                  <Button color='orange' fluid size='huge'>
                    NOTIFY USER
                  </Button>
                  <Message floating icon color='blue'>
                    <Icon name='warning circle' />
                    This Item is a Rental
                  </Message>
                  <Header as='h3'>
                    This Item is:
                  </Header>
                  <List size='huge'>
                    <List.Item content='Meetup' />
                    <List.Item content='Shipping' />
                    <List.Item content='Used' />
                  </List>
                </ItemQickInfo>
              </Grid.Column>
              <Grid.Column computer={16}>
                <Menu tabular>
                  <Menu.Item name='description' active />
                  <Menu.Item name='User Feedback' />
                </Menu>
                <DescriptionContainer>
                  <p>Bacon ipsum dolor amet ham hock meatball prosciutto brisket spare ribs tenderloin rump salami hamburger. Kielbasa pork belly bresaola burgdoggen, strip steak beef tenderloin short loin. Kielbasa jowl picanha, andouille doner landjaeger swine beef ribs tri-tip ground round meatball. Jowl pastrami jerky kielbasa chicken ground round boudin kevin landjaeger ham hock porchetta tail biltong flank swine. Chuck pig pork pork chop ham pork belly ball tip ribeye alcatra jowl beef kevin swine drumstick. Turducken alcatra flank biltong. Swine meatloaf pig biltong, chicken rump tri-tip filet mignon strip steak hamburger sausage chuck andouille.</p>
                </DescriptionContainer>
              </Grid.Column>
              <Grid.Column computer={16}>

                <Grid>
                  <Grid.Row>
                    <Grid.Column computer={16}>
                      <HeaderStyle as='h3'>
                        Other Items This Seller Is Selling
                      </HeaderStyle>
                    </Grid.Column>
                    <ItemBlock link='/item/asasd' />
                    <ItemBlock link='/item/asasd' />
                    <ItemBlock link='/item/asasd' />
                    <ItemBlock link='/item/asasd' />
                  </Grid.Row>
                </Grid>

              </Grid.Column>
            </Grid.Row>
          </Grid>

        </ItemContainerStyle>
      </Grid.Row>
    </Grid>
  )
}

export default ItemContainer
