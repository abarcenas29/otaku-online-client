import { createSelector } from 'reselect';

/**
 * Direct selector to the manageItemSell state domain
 */
const selectManageItemSellDomain = () => (state) => state.get('manageItemSell');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ManageItemSell
 */

const makeSelectManageItemSell = () => createSelector(
  selectManageItemSellDomain(),
  (substate) => substate.toJS()
);

export default makeSelectManageItemSell;
export {
  selectManageItemSellDomain,
};
