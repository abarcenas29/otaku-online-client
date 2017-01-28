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

const FullContainer = css.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export class LoginVerify extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
    const query = location.search.substring(1)
    const formatted = qs.parse(query)

    console.log(formatted)
  }

  render () {
    return (
      <FullContainer>
        <VerifyDialog />
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
