import { call, take, fork, cancel } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
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
  const { payload: { resolve, reject, ...body } } = data

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')

  const url = `${API_URL}/auth/verify`
  const req = yield call(request, url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })

  if (!req.err) {
    resolve(req)
  } else {
    req.err.body.then(data => {
      const { response } = data
      reject(response.error)
    })
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

export function* verifyFbCodeSaga () {
  yield * takeLatest(PASS_FB_CODE, VerifyFbCode)
}

export function* registerUserSaga () {
  yield * takeLatest(CREATE_USER, RegisterUser)
}

// Individual exports for testing
export function* LoginVerifySagas () {
  // See example in containers/HomePage/sagas.js
  const watchers = yield * [
    fork(verifyFbCodeSaga),
    fork(registerUserSaga)
  ]

  yield take(LOCATION_CHANGE)
  yield watchers.map(task => cancel(task))
}

// All sagas to be loaded
export default [LoginVerifySagas]
