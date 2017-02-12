/**
*
* SecondaryMenu
*
*/

import React from 'react'
import css from 'styled-components'

import { Icon, Header, Menu } from 'semantic-ui-react'

const MenuContainer = css.div`
  display: flex;
  flex-direction: column;
`

const MenuHeader = css.div`
  background-color: #F2711C;
  color: #FFF;
  display: flex;
  padding: 1em;
`

const HeaderStyle = css(Header)`
  color: #FFF !important;
  margin-bottom: 0em !important;
  flex-grow: 1;
`

const MiniControl = css.div`

`

function SecondaryMenu ({
  iconName,
  title,
  toggleFunc,
  toggleState,
  children
}) {
  return (
    <MenuContainer>
      <MenuHeader>
        <HeaderStyle as='h3'>
          <Icon name={iconName} />
          {title}
        </HeaderStyle>
        <MiniControl>
          <button onClick={toggleFunc}>
            { !toggleState && <Icon name='chevron down' /> }
            { toggleState && <Icon name='chevron up' /> }
          </button>
        </MiniControl>
      </MenuHeader>
      {
        toggleState &&
        <Menu vertical fluid borderless compact>
          {children}
        </Menu>
      }
    </MenuContainer>
  )
}

export default SecondaryMenu
