
import { fromJS } from 'immutable';
import loginVeirfyReducer from '../reducer';

describe('loginVeirfyReducer', () => {
  it('returns the initial state', () => {
    expect(loginVeirfyReducer(undefined, {})).toEqual(fromJS({}));
  });
});
