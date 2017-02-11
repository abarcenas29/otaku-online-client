import { createSelector } from 'reselect'

/**
 * Direct selector to the browse state domain
 */
const selectBrowseDomain = () => (state) => state.get('browse')

/**
 * Other specific selectors
 */

/**
 * Default selector used by Browse
 */

const makeSelectBrowse = () => createSelector(
  selectBrowseDomain(),
  (substate) => substate.toJS()
)

export default makeSelectBrowse
export {
  selectBrowseDomain
}
