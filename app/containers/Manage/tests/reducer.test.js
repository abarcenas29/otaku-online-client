
import { fromJS } from 'immutable';
import manageReducer from '../reducer';

describe('manageReducer', () => {
  it('returns the initial state', () => {
    expect(manageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
