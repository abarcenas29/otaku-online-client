
import { fromJS } from 'immutable';
import manageItemSellReducer from '../reducer';

describe('manageItemSellReducer', () => {
  it('returns the initial state', () => {
    expect(manageItemSellReducer(undefined, {})).toEqual(fromJS({}));
  });
});
