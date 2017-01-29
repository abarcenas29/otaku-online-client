/*
 *
 * Login
 *
 */

import React from 'react'

import LoginDialog from './sections/LoginDialog'

// Facebook Graph
import graph from 'fbgraph'
import { FB_APP_ID, BASE_URL } from './../../constants'

import css from 'styled-components'

const FullContainer = css.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: black;
`

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor (props, context) {
    super(props, context)

    this.state = {
      fbUrl: ''
    }

    this._generateFBUrl = this._generateFBUrl.bind(this)
  }

  componentWillMount () {
    this.setState({fbUrl: this._generateFBUrl()})
  }

  _generateFBUrl () {
    const authUrl = graph.getOauthUrl({
      client_id: FB_APP_ID,
      redirect_uri: `${BASE_URL}/login/verify`,
      scope: 'email'
    })

    return authUrl
  }

  render () {
    return (
      <FullContainer>
        <LoginDialog
          fbUrl={this.state.fbUrl}
        />
      </FullContainer>
    )
  }
}

export default Login
