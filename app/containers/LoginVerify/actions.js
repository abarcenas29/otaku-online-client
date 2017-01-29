/*
 *
 * Login Veirfy actions
 *
 */

import {
  PASS_FB_CODE,
  CREATE_USER
} from './constants'

export function passFBCodeAction (payload) {
  return {
    type: PASS_FB_CODE,
    payload
  }
}

export function createUserAction (payload) {
  return {
    type: CREATE_USER,
    payload
  }
}
