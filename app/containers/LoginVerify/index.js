/*
 *
 * LoginVeirfy
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
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
      code: ''
    }

    this._parseFbCode = this._parseFbCode.bind(this)
  }

  componentDidMount () {
    this._parseFbCode()
  }

  _parseFbCode () {
    const query = location.search.substring(1)
    const formatted = qs.parse(query)

    this.setState({code: formatted.code})
  }

  render () {
    return (
      <FullContainer>
        {this.state.code.length < 0 && <VerifyDialog code={this.state.code} />}
        <RegisterDialog />
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
