
import { fromJS } from 'immutable';
import browseReducer from '../reducer';

describe('browseReducer', () => {
  it('returns the initial state', () => {
    expect(browseReducer(undefined, {})).toEqual(fromJS({}));
  });
});
