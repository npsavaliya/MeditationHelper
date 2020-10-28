/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from './types';

const initialState = {
  sounds: null,
  timeInMin: 0,
  loading: false
};

export const volumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SOUNDS_LIST:
      return {
        ...state,
        sounds: action?.sounds ?? state.sounds
      };

    case types.SET_TIMER_IN_MIN:
      return {
        ...state,
        timeInMin: action?.timeInMin ?? state.timeInMin
      };

    default:
      return state;
  }
};
