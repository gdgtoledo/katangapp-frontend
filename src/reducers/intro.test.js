import { SET_INTRO_SHOWED } from '../actions/getBusStops';
import intro from './intro';

const initialState = { state: false };

describe('intro reducer for SET_INTRO_SHOWED', () => {
  it('should be showed', () => {
    const newState = intro(initialState, { type: SET_INTRO_SHOWED, state: true });
    expect(newState).toEqual({ state: true });
  });

  it('should be not showed', () => {
    const newState = intro(initialState, { type: 'DEFAULT', state: false });
    expect(newState).toEqual({ state: false });
  });
});
