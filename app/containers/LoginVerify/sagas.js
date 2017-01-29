import { call, take, takeLatest, cancel } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import request from 'utils/request'
import {
  PASS_FB_CODE,
  CREATE_USER
} from './constants'

import {
  API_URL
} from './../../constants'

export function* VerifyFbCode (data) {
  const { payload: { resolve, reject, code } } = data

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')

  const url = `${API_URL}/auth/verify`
  const req = yield call(request, url, {
    method: 'POST',
    body: JSON.stringify({code})
  })

  if (!req.err) {
    resolve(req)
  } else {
    reject(req.err)
  }
}

export function* RegisterUser (data) {
  const { payload: {resolve, reject, ...fields} } = data

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')

  const url = `${API_URL}/users`
  const req = yield call(request, url, {
    method: 'POST',
    body: JSON.stringify(fields)
  })

  if (req.err) {
    resolve(req)
  } else {
    reject(reject)
  }
}

// Individual exports for testing
export function* LoginVerifySagas () {
  // See example in containers/HomePage/sagas.js
  const watchers = [
    takeLatest(PASS_FB_CODE, VerifyFbCode),
    takeLatest(CREATE_USER, RegisterUser)
  ]

  yield take(LOCATION_CHANGE)
  yield cancel(watchers)
}

// All sagas to be loaded
export default [
  LoginVerifySagas
]
