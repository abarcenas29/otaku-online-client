import React from 'react'
import css from 'styled-components'
import {
  Image,
  Button
} from 'semantic-ui-react'

const AnimePosterStyle = css.button`
  width: 20%;
  margin-bottom: 1em;
  position: relative;
`

const CloseIconContainer = css.div`
  display: flex;
  position: absolute;
  right: 3px;
  top: 0;
  z-index: 100;
`

function AnimePoster () {
  return (
    <AnimePosterStyle>
      <CloseIconContainer>
        <Button
          icon='close'
          size='tiny'
          negative
        />
      </CloseIconContainer>
      <Image
        src='https://cdn.anilist.co/img/dir/anime/reg/11757.jpg'
      />
      <p>Gundam: Iron Blooded Orphan</p>
    </AnimePosterStyle>
  )
}

export default AnimePoster
