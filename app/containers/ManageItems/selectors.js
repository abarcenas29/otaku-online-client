import { createSelector } from 'reselect'

/**
 * Direct selector to the itemAdd state domain
 */
const selectManageItemsDomain = () => (state) => state.get('ManageItems')

/**
 * Other specific selectors
 */

/**
 * Default selector used by ItemAdd
 */

const makeSelectItemAdd = () => createSelector(
  selectManageItemsDomain(),
  (substate) => substate.toJS()
)

export default makeSelectItemAdd
export {
  makeSelectItemAdd
}
