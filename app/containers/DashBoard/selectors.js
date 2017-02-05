// import { createSelector } from 'reselect'

/**
 * Direct selector to the dashBoard state domain
 */
const selectDashBoardDomain = () => (state) => state.get('dashBoard')

/**
 * Other specific selectors
 */

/**
 * Default selector used by DashBoard
 */

export {
  selectDashBoardDomain
}
