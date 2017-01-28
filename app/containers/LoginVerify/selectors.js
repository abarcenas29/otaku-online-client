// import { createSelector } from 'reselect'

/**
 * Direct selector to the loginVeirfy state domain
 */
const selectLoginVeirfyDomain = () => (state) => state.get('loginVeirfy')

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginVeirfy
 */

export {
  selectLoginVeirfyDomain
}
