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

import SellItemForm from './sections/SellItemFrom'

export class ManageItemSell extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor (props, context) {
    super(props, context)

    this.state = {
      form: fromJS({})
    }
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
        <SellItemForm initialValues={this.state.form} />
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
