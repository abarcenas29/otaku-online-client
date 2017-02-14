import React from 'react'
import css from 'styled-components'
import {
  Icon
} from 'semantic-ui-react'

const AnimePosterAddStyle = css.button`
  align-items: center;
  border: 2px dashed orange;
  display: flex;
  height: 18.5em;
  justify-content: center;
  padding: 0;
  width: 20%;

  @media only screen and (max-width: 767px) and (min-width: 320px) {
    width: 85%;
  }
`

function AnimePosterAdd () {
  return (
    <AnimePosterAddStyle>
      <Icon
        name='plus'
        size='huge'
        color='orange' />
    </AnimePosterAddStyle>
  )
}

export default AnimePosterAdd
