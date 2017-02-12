
import { fromJS } from 'immutable';
import itemAddReducer from '../reducer';

describe('itemAddReducer', () => {
  it('returns the initial state', () => {
    expect(itemAddReducer(undefined, {})).toEqual(fromJS({}));
  });
});
