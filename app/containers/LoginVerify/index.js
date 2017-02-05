/*
 *
 * LoginVeirfy
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fromJS } from 'immutable'
import { push } from 'react-router-redux'
import qs from 'querystring'

import css from 'styled-components'

// Constants
import {
  BASE_URL
} from './../../constants'

// Sections
import VerifyDialog from './sections/VerifyDialog'
import RegisterDialog from './sections/RegisterDialog'

// Actions
import {
  passFBCodeAction,
  createUserAction
} from './actions'

const FullContainer = css.div`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: black;
`

export class LoginVerify extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor (props, context) {
    super(props, context)

    this.state = {
      code: '',
      form: fromJS({}),
      showVerifyDialog: true,
      errorVerifyDialog: false,
      errorVerifyMsg: '',
      showRegisterDialog: false,
      registerToken: ''
    }

    this._parseFbCode = this._parseFbCode.bind(this)
    this.submitNewUser = this.submitNewUser.bind(this)
    this.submitFbCode = this.submitFbCode.bind(this)
  }

  componentDidMount () {
    return new Promise((resolve, reject) => {
      resolve(this._parseFbCode())
    })
    .then(() => {
      this.submitFbCode()
    })
  }

  submitFbCode () {
    return new Promise((resolve, reject) => {
      const payload = {
        resolve,
        reject,
        code: this.state.code,
        redirect_uri: `${BASE_URL}/login/verify`
      }
      this.props.passFBCode(payload)
    })
    .then(({data: { response: { token } }}) => {
      // get the detail from the token
      const JWTContent = JSON.parse(atob(token.split('.')[1]))

      this.setState({registerToken: token})
      if (JWTContent.user === 'new') {
        this.setState({showRegisterDialog: true})
        this.setState({showVerifyDialog: false})
        const userDetails = {
          fbid: JWTContent.id,
          email: JWTContent.email,
          name: JWTContent.name
        }

        this.setState({form: fromJS(userDetails)})
      } else {
        // since the user exist pass the json token
        window.localStorage.setItem('token', token)
      }
    })
    .catch(e => {
      this.setState({errorVerifyMsg: e.message})
      this.setState({errorVerifyDialog: true})
    })
  }

  submitNewUser (values) {
    return new Promise((resolve, reject) => {
      // pass the detail token
      const token = this.state.registerToken
      const { mobile_no } = values.toJS()
      const payload = { resolve, reject, token, mobile_no }
      this.props.createUser(payload)
    })
    .then(data => {
      this.props.redirect('/login')
    })
  }

  _parseFbCode () {
    const query = location.search.substring(1)
    const formatted = qs.parse(query)

    this.setState({code: formatted.code})
  }

  render () {
    return (
      <FullContainer>
        {
          this.state.showVerifyDialog &&
          <VerifyDialog
            errorDialogCheck={this.state.errorVerifyDialog}
            errorVerifyMsg={this.state.errorVerifyMsg}
          />
        }
        {
          this.state.showRegisterDialog &&
          <RegisterDialog
            initialValues={this.state.form}
            submitNewUser={this.submitNewUser}
          />
        }
      </FullContainer>
    )
  }
}

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps (dispatch) {
  return {
    passFBCode: payload => dispatch(passFBCodeAction(payload)),
    createUser: payload => dispatch(createUserAction(payload)),
    redirect: (payload) => dispatch(push(payload)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginVerify)
