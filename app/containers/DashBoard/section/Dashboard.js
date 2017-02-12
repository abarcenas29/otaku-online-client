import React from 'react'
import { Link } from 'react-router'
import css from 'styled-components'

import { Menu, Input, Button, Image, Icon, Grid } from 'semantic-ui-react'

import AvatarBox from 'components/AvatarBox'

const DashBoardSkeleton = css.div`
  height: inherit;
  display: flex;
  flex-direction: column;
`

const BannerImage = css(Image)`
  width: 50px;
  height: 50px;
`

const NavBar = css.div`
  min-height: 6em;
  width: 100%;
`

const MobileMenu = css(Menu)`
  margin: 0 !important;
  position: absolute;
  top: 0;
  z-index: 100;
`

const MainMenu = css(Menu)`
  margin-bottom: 0 !important;
`

const MobileMenuContainer = css.div`
  position: relative;
  width: 100%;
  height: 0;
`

const MobileCenter = css.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const MobileSearchContainer = css.div`
  display: flex;
  justify-content: center;
  background-color: #FFF;
  padding: 1em;
  border-color: rgba(34, 36, 38, 0.15);
  border-width: 0 1px 1px 1px;
  border-style: solid;
  min-height: 5em;
`

const ContentContainer = css.div`
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;
  flex-direction: column;
`

const Content = css.div`
  flex-grow: 1;
  display: block;
`

const MainFooter = css.div`

`

function Dashboard ({
  children,
  menus,
  redirectToSellItem,
  showMobileMenu,
  toggleMobileMenu
}) {
  return (
    <DashBoardSkeleton>
      <NavBar>
        <MainMenu borderless>
          <Menu.Menu>
            <Menu.Item link>
              <Link to='/browse'>
                <BannerImage src='http://placehold.it/100x100' />
              </Link>
            </Menu.Item>
            <Menu.Item className='hide-on-mobile'>
              <Input
                icon='search'
                label={<Button icon='search' />}
                labelPosition='right' />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item className='hide-on-mobile'>
              <Button size='large' primary onClick={redirectToSellItem}>
                <Icon name='money' />
                Sell Items
              </Button>
            </Menu.Item>
            <Menu.Item className='hide-on-pc' link>
              <Icon name='money' size='large' color='blue' />
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
            <Menu.Item
              link
              className='hide-on-pc'
              onClick={toggleMobileMenu}>
              <Icon name='bars' size='large' color='orange' />
            </Menu.Item>
          </Menu.Menu>
        </MainMenu>
        {
          showMobileMenu &&
          <MobileMenuContainer className='hide-on-pc'>
            <MobileMenu vertical fluid borderless>
              <Menu.Item link>
                <AvatarBox />
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
                <MobileCenter>
                  <Button size='huge' color='orange'>
                    <Icon name='tag' />
                    Browse
                  </Button>
                </MobileCenter>
              </Menu.Item>
            </MobileMenu>
          </MobileMenuContainer>
        }
      </NavBar>
      <MobileSearchContainer className='hide-on-pc'>
        <Input
          style={{width: '100%'}}
          fluid
          icon='search'
          label={<Button icon='search' />}
          labelPosition='right'
        />
      </MobileSearchContainer>
      <ContentContainer>
        <Content>{children}</Content>
        <MainFooter>
          <Grid centered padded>
            <Grid.Row>
              <Grid.Column computer={14}>
                <p>Footer</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </MainFooter>
      </ContentContainer>
    </DashBoardSkeleton>
  )
}

export default Dashboard
