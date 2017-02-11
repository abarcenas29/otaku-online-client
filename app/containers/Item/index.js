/*
 *
 * Item
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import makeSelectItem from './selectors'

import ItemContainer from './sectors/ItemContainer'

export class Item extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Helmet
          title='Item'
          meta={[
            { name: 'description', content: 'Description of Item' }
          ]}
        />
        <ItemContainer />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  Item: makeSelectItem()
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
