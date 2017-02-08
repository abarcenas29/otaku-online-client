import React from 'react'
import css from 'styled-components'

import { Menu, Input, Dropdown, Button, Image, Icon, Header } from 'semantic-ui-react'

const DashBoardSkeleton = css.div`
  height: inherit;
  display: flex;
`

const BannerImage = css(Image)`
  width: 50px;
  height: 50px;
`

const NavBar = css.div`
  min-height: 5em;
  width: 100%;
`

const MobileMenu = css(Menu)`
  margin: 0 !important;
  position: absolute;
  top: 0;
`

const MobileMenuContainer = css.div`
  position: relative;
  width: 100%;
`

const MobileCenter = css.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const AvatarBox = css.div`
  display: flex;
`
const AvatarControls = css.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 1em;
`

function Dashboard ({menus}) {
  return (
    <DashBoardSkeleton>
      <NavBar>
        <Menu borderless>
          <Menu.Menu>
            <Menu.Item link>
              <BannerImage src='http://placehold.it/100x100' />
            </Menu.Item>
            <Menu.Item className='hide-on-mobile'>
              <Input icon='search' />
              <Dropdown
                selection
                search
                defaultValue={1}
                options={[
                  {text: 'Cainta', value: 1}
                ]}
              />
              <Button icon='search' />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item className='hide-on-mobile'>
              <Button size='huge' primary>
                <Icon name='money' />
                Sell Items
              </Button>
            </Menu.Item>
            <Menu.Item className='hide-on-pc' link>
              <Icon name='money' size='large' color='blue' />
            </Menu.Item>
            <Menu.Item className='hide-on-mobile'>
              <Button size='huge' color='orange'>
                <Icon name='tag' />
                Browse
              </Button>
            </Menu.Item>
            <Menu.Item className='hide-on-mobile'>
              <Button color='facebook' size='huge'>
                <Icon name='facebook square' />
                Participate
              </Button>
            </Menu.Item>
            <Menu.Item link className='hide-on-mobile'>
              <Icon name='user' size='large' />
            </Menu.Item>
            <Menu.Item link className='hide-on-pc'>
              <Icon name='bars' size='large' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <MobileMenuContainer className='hide-on-pc'>
          <MobileMenu vertical fluid borderless>
            <Menu.Item link>
              <AvatarBox>
                <Image src='http://placehold.it/100x100' shape='circular' />
                <AvatarControls>
                  <Header as='h2'>
                    Username
                    <Header.Subheader>Role</Header.Subheader>
                  </Header>
                  <a>Logout</a>
                </AvatarControls>
              </AvatarBox>
            </Menu.Item>
            <Menu.Item>
              <MobileCenter>
                <Button color='facebook' size='huge'>
                  <Icon name='facebook square' />
                  Participate
                </Button>
              </MobileCenter>
            </Menu.Item>
            <Menu.Item>
              <Input icon='search' placeholder='Search item' fluid />
              <Dropdown
                fluid
                selection
                search
                defaultValue={1}
                options={[
                  {text: 'Cainta', value: 1}
                ]}
              />
              <Button fluid>
                SEARCH
              </Button>
            </Menu.Item>
            <Menu.Item>
              <MobileCenter>
                <Button size='huge' color='orange'>
                  <Icon name='tag' />
                  Browse
                </Button>
              </MobileCenter>
            </Menu.Item>
          </MobileMenu>
        </MobileMenuContainer>
      </NavBar>
    </DashBoardSkeleton>
  )
}

export default Dashboard
