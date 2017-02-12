/*
 *
 * ItemAdd
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import makeSelectItemAdd from './selectors'

import TableData from './sections/TableData'

export class ItemAdd extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Helmet
          title='Manage Items'
          meta={[
            { name: 'description', content: 'Description of ItemAdd' }
          ]}
        />
        <TableData />
      </div>
    )
  }
}

ItemAdd.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  ItemAdd: makeSelectItemAdd()
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemAdd)
