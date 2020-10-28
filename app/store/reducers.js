/*
 * combines all th existing reducers
 */
import { combineReducers } from 'redux';
import * as login from '../features/login/reducers';
import * as volume from '../features/volumeAdjust/reducers';
// const rootReducer = Object.assign({}, login, volume);
// const rootReducer = combineReducers({
//         login: loginReducer,
//         volume: loginReducer
//     });

export default Object.assign({}, {loginReducer: login.loginReducer}, {volumeReducer: volume.volumeReducer});
