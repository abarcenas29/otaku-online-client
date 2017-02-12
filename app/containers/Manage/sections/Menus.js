import React from 'react'
import { Link } from 'react-router'

import { Menu } from 'semantic-ui-react'

import SecondaryMenu from 'components/SecondaryMenu'

function Menus () {
  return (
    <SecondaryMenu
      iconName='wrench'
      title='Manage'
      toggleFunc={() => {}}
      toggleState
    >
      <Menu.Item link>
        <Link to='/manage/items'>
          Items
        </Link>
      </Menu.Item>
      <Menu.Item link>
        <Link to='/manage/customers'>
          Messages
        </Link>
      </Menu.Item>
      <Menu.Item link>
        <Link to='/manage/Feedback'>
          Feedback
        </Link>
      </Menu.Item>
    </SecondaryMenu>
  )
}

export default Menus
