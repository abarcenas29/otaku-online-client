import { createSelector } from 'reselect';

/**
 * Direct selector to the item state domain
 */
const selectItemDomain = () => (state) => state.get('item');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Item
 */

const makeSelectItem = () => createSelector(
  selectItemDomain(),
  (substate) => substate.toJS()
);

export default makeSelectItem;
export {
  selectItemDomain,
};
