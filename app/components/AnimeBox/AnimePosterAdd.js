import React from 'react'
import css from 'styled-components'
import {
  Icon
} from 'semantic-ui-react'

const AnimePosterAddStyle = css.button`
  width: 20%;
  align-items: center;
  border: 2px dashed orange;
  display: flex;
  height: 18.5em;
  justify-content: center;
  padding: 0;
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
