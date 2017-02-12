import { createSelector } from 'reselect'

/**
 * Direct selector to the manage state domain
 */
const selectManageDomain = () => (state) => state.get('manage')

/**
 * Other specific selectors
 */

/**
 * Default selector used by Manage
 */

const makeSelectManage = () => createSelector(
  selectManageDomain(),
  (substate) => substate.toJS()
)

export default makeSelectManage
export {
  selectManageDomain
}
