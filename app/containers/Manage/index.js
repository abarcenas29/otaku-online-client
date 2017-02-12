/*
 *
 * Manage
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Grid } from 'semantic-ui-react'
import css from 'styled-components'

import Menus from './sections/Menus'

import makeSelectManage from './selectors'

export class Manage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column computer={3} mobile={16}>
            <Menus />
          </Grid.Column>
          <Grid.Column computer={13} mobile={16}>
            {React.Children.toArray(this.props.children)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

Manage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  Manage: makeSelectManage()
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Manage)
