/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from './types';

const initialState = {
  isLoggedIn: false,
  id: 0,
  username: '',
  password: '',
  loading: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        username: action.username,
        password: action.password,
      };
    case types.LOGIN_RESPONSE:
      return {
        ...state,
        id: action.response.id,
        isLoggedIn: true,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
      };
    case types.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case types.LOGIN_ENABLE_LOADER:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_DISABLE_LOADER:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
