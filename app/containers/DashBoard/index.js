/*
 *
 * DashBoard
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import css from 'styled-components'

import Dashboard from './section/Dashboard'

// css attempt
import './menuStyle.js'

const Container = css.div`
  height: inherit;
`

export class DashBoard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor (props, context) {
    super(props, context)
    this.state = {
      menu: [
        {
          label: 'Manage',
          content: [
            {
              label: 'Users',
              to: '#'
            }
          ]
        },
        {
          label: 'Menu 2',
          to: '#'
        }
      ],
      showMobileMenu: false
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu () {
    this.setState({showMobileMenu: !this.state.showMobileMenu})
  }

  render () {
    return (
      <Container>
        <Helmet
          title='DashBoard'
          meta={[
            { name: 'description', content: 'Description of DashBoard' }
          ]}
          link={[
            {rel: 'stylesheet', type: 'text/css', href: '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'}
          ]}
        />
        <Dashboard
          menus={this.state.menu}
          showMobileMenu={this.state.showMobileMenu}
          toggleMobileMenu={this.toggleMobileMenu}
        >
          {React.Children.toArray(this.props.children)}
        </Dashboard>
      </Container>
    )
  }
}

DashBoard.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
