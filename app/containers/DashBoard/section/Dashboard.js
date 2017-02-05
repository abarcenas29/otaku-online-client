import React from 'react'
import css from 'styled-components'
import MetisMenu from 'react-metismenu'
import RouterLink from 'react-metismenu-router-link'

const DashBoardSkeleton = css.div`
  height: inherit;
  display: flex;
`

const Menu = css.div`
  width: 20em;
  height: inherit
`

const Navbar = css.div`
  width: 100%;
  height: 3em;
  background-color: pink;
`

function Dashboard ({menus}) {
  return (
    <DashBoardSkeleton>
      <Menu>
        <MetisMenu content={menus} LinkComponent={RouterLink} />
      </Menu>
      <Navbar />
    </DashBoardSkeleton>
  )
}

export default Dashboard
