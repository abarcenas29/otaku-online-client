/*
 *
 * Browse
 *
 */

import React from 'react'
import { connect } from 'react-redux'
// import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import makeSelectBrowse from './selectors'
import { Grid } from 'semantic-ui-react'

import FilterBox from './sections/FilterBox'
import ItemContainer from './sections/ItemContainer'

export class Browse extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor (props, context) {
    super(props, context)

    this.state = {
      filterBoxToggle: true
    }

    this.toggleFilterBox = this.toggleFilterBox.bind(this)
  }

  toggleFilterBox () {
    this.setState({filterBoxToggle: !this.state.filterBoxToggle})
  }

  render () {
    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={5} computer={4}>
            <FilterBox
              filterBoxToggle={this.state.filterBoxToggle}
              toggleFilterBox={this.toggleFilterBox}
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={11} computer={12}>
            <ItemContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  Browse: makeSelectBrowse()
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
