/*
 *
 * LoginVeirfy
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fromJS } from 'immutable'
import qs from 'querystring'

import css from 'styled-components'

import VerifyDialog from './sections/VerifyDialog'
import RegisterDialog from './sections/RegisterDialog'

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
      showRegisterDialog: false
    }

    this._parseFbCode = this._parseFbCode.bind(this)
    this.submitNewUser = this.submitNewUser.bind(this)
  }

  componentDidMount () {
    this._parseFbCode()
  }

  submitNewUser (values) {
    console.log(values.toJS())
  }

  _parseFbCode () {
    const query = location.search.substring(1)
    const formatted = qs.parse(query)

    this.setState({code: formatted.code})
  }

  render () {
    return (
      <FullContainer>
        {this.state.showVerifyDialog && <VerifyDialog code={this.state.code} />}
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
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginVerify)
