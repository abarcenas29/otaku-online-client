/*
 *
 * DashBoard
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import css from 'styled-components'

import Dashboard from './section/Dashboard'

const Container = css.div`
  height: inherit;
`

export class DashBoard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor (props, context) {
    super(props, context)
    this.state = {
      showMobileMenu: false
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.redirectToSellItem = this.redirectToSellItem.bind(this)
  }

  redirectToSellItem () {
    // check if the user has a mobile phone.
    // prompt that before proceeding
    this.props.redirect('/manage/item/add')
  }

  toggleMobileMenu () {
    this.setState({showMobileMenu: !this.state.showMobileMenu})
  }

  render () {
    return (
      <Container>
        <Helmet
          title='DashBoard'
        />
        <Dashboard
          menus={this.state.menu}
          showMobileMenu={this.state.showMobileMenu}
          toggleMobileMenu={this.toggleMobileMenu}
          redirectToSellItem={this.redirectToSellItem}
        >
          {React.Children.toArray(this.props.children)}
        </Dashboard>
      </Container>
    )
  }
}

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps (dispatch) {
  return {
    redirect: url => dispatch(push(url)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
