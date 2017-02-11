/**
*
* AvatarBox
*
*/

import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import css from 'styled-components'

const AvatarBoxContainer = css.div`
  display: flex;
`
const AvatarControls = css.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 1em;
`

function AvatarBox () {
  return (
    <AvatarBoxContainer>
      <Image src='http://placehold.it/100x100' shape='circular' />
      <AvatarControls>
        <Header as='h2'>
          Username
          <Header.Subheader>Role</Header.Subheader>
        </Header>
        <a>Logout</a>
      </AvatarControls>
    </AvatarBoxContainer>
  )
}

export default AvatarBox
