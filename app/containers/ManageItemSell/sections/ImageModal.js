import React from 'react'
import css from 'styled-components'
import Cropper from 'react-cropper'

import 'cropperjs/dist/cropper.css'

import {
  Button
} from 'semantic-ui-react'

import StandardModal from 'components/StandardModal'

const Container = css.div`
  display: flex;
  flex-direction: column;
`

const ImageContainer = css.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ButtonControls = css.div`
  width: 100%;
  text-align: center;
  margin: 1em;
`

const MessageContainer = css.div`
  display: block;
  text-align: center;
`

function ImageModal ({
  cropperRef,
  selectedImage,
  cropperSave,
  removeImage,
  ...props
}) {
  return (
    <StandardModal
      header={<p>Image Header</p>}
      size='small'
      {...props}
    >
      <Container>
        <ImageContainer>
          <Cropper
            aspectRatio={1 / 1}
            ref={cropperRef}
            guides={false}
            style={{width: '100%', height: '480px'}}
            src={selectedImage.preview}
          />
        </ImageContainer>
        <MessageContainer>
          <p>Use the mousewheel or pinch&zoom to crop the image to desired portion.</p>
        </MessageContainer>
        <ButtonControls>
          <Button
            negative
            onClick={() => removeImage(selectedImage)}
          >
            Delete Image
          </Button>
          <Button
            onClick={cropperSave}
            primary>
            Crop Image
          </Button>
        </ButtonControls>
      </Container>
    </StandardModal>
  )
}

export default ImageModal
