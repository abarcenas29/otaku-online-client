/**
*
* StandardModal
*
*/

import React from 'react'

import {
  Modal
} from 'semantic-ui-react'

function StandardModal ({children, header, ...fields}) {
  return (
    <Modal {...fields}>
      <Modal.Header>
        {header}
      </Modal.Header>
      <Modal.Content>
        {children}
      </Modal.Content>
    </Modal>
  )
}

export default StandardModal
