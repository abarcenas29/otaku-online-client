/*
 *
 * ManageItemSell
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { fromJS } from 'immutable'

import { createStructuredSelector } from 'reselect'
import makeSelectManageItemSell from './selectors'

import SellItemForm from './sections/SellItemForm'
import AddAnimeModal from './sections/AddAnimeModal'
import ImageModal from './sections/ImageModal'

export class ManageItemSell extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor (props, context) {
    super(props, context)

    this.state = {
      form: fromJS({}),
      imageModalState: false,
      uploadFiles: fromJS({
        type: 'none',
        files: []
      }),
      primaryImage: {},
      primaryImageIndex: -1
    }

    this.submitItem = this.submitItem.bind(this)

    // Dropzone
    this.dropzoneRef = this.dropzoneRef.bind(this)
    this.dropzoneOnDrop = this.dropzoneOnDrop.bind(this)
    this.imageModalOpen = this.imageModalOpen.bind(this)

    // Cropper
    this.cropperRef = this.cropperRef.bind(this)
    this.cropperSave = this.cropperSave.bind(this)

    // Modal
    this.imageModalOpen = this.imageModalOpen.bind(this)
    this.imageModalClose = this.imageModalClose.bind(this)
    this.removeImage = this.removeImage.bind(this)
  }

  submitItem (values) {
    console.log('values', values.toJS())
  }

  /**
   * Cropper Events
   */
  cropperRef (node) {
    this.cropper = node
  }

  cropperSave (input) {
    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return
    }

    let primaryImage = this.state.primaryImage
    let croppedImage = this.cropper.getCroppedCanvas()

    primaryImage.preview = croppedImage.toDataURL()
    croppedImage.toBlob(blob => {
      primaryImage.blob = blob
      this.setState({
        imageModalState: false,
        primaryImage: primaryImage,
        primaryImageIndex: primaryImage.imageIndex
      })
    })
  }

  /**
   * Dropzone Events
   */
  dropzoneRef (node) {
    this.dropzone = node
  }

  dropzoneOnDrop (acceptableFiles, rejectedFiles) {
    if (rejectedFiles.length > 0) {
      // Error
    } else if (acceptableFiles.length <= 5) {
      let uploadFiles = this.state.uploadFiles.toJS()
      // combine the files and see if its more than 5
      const totalFiles = acceptableFiles.length + uploadFiles.files.length
      if (totalFiles <= 5) {
        uploadFiles.type = 'new'
        acceptableFiles.forEach(image => {
          uploadFiles.files.push(image)
        })
      }
      this.setState({uploadFiles: fromJS(uploadFiles)})
    }
  }

  /**
   * Image Modal
   */

  imageModalOpen (index) {
    let selectedImage = Object.assign({}, this.state.uploadFiles.toJS().files[index])
    selectedImage.imageIndex = index
    console.log('selected image', selectedImage)
    this.setState({
      primaryImage: selectedImage,
      imageModalState: true
    })
  }

  imageModalClose () {
    this.setState({imageModalState: false})
  }

  removeImage (selectedImage) {
    const uploadFiles = this.state.uploadFiles.toJS()
    const selectedImageIndex = selectedImage.imageIndex

    uploadFiles.files.splice(selectedImageIndex, 1)
    this.setState({
      uploadFiles: fromJS(uploadFiles)
    })
    if (selectedImageIndex === this.state.primaryImageIndex) {
      // reset the primary image
      this.setState({
        primaryImage: {},
        primaryImageIndex: -1
      })
    } else {
      // shift the image primary index
      if (selectedImageIndex < this.state.primaryImageIndex) {
        this.setState({primaryImageIndex: this.state.primaryImageIndex - 1})
      }
    }
    this.imageModalClose()
  }

  render () {
    return (
      <div>
        <Helmet
          title='Sell Item'
          meta={[
            { name: 'description', content: 'Description of ManageItemSell' }
          ]}
        />
        <SellItemForm
          dropzoneOnDrop={this.dropzoneOnDrop}
          dropzoneRef={this.dropzoneRef}
          imageModalOpen={this.imageModalOpen}
          initialValues={this.state.form}
          primaryImageIndex={this.state.primaryImageIndex}
          submitItem={this.submitItem}
          uploadFiles={this.state.uploadFiles.toJS()}
        />
        <AddAnimeModal />
        <ImageModal
          cropperRef={this.cropperRef}
          cropperSave={this.cropperSave}
          onClose={this.imageModalClose}
          open={this.state.imageModalState}
          removeImage={this.removeImage}
          selectedImage={this.state.primaryImage}
        />
      </div>
    )
  }
}

ManageItemSell.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  ManageItemSell: makeSelectManageItemSell()
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageItemSell)
