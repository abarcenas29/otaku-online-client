import React from 'react'
import css from 'styled-components'
import {
  Input
} from 'semantic-ui-react'

import StandardModal from 'components/StandardModal'
import AnimePoster from 'components/AnimeBox/AnimePoster'

const Container = css.div`
  display: flex;
  flex-direction: column;
`

const AnimeList = css.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  overflow-y: auto;
  max-height: 45em;
`

function AddAnimeModal () {
  return (
    <StandardModal
      header={<p>Add Anime Title</p>}
      size='small'
      defaultOpen
    >
      <Container>
        <div><Input fluid size='big' /></div>
        <br />
        <AnimeList>
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
          <AnimePoster />
        </AnimeList>
      </Container>
    </StandardModal>
  )
}

export default AddAnimeModal
