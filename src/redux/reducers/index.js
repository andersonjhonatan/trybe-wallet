import { combineReducers } from 'redux';
import wallet from '../../pages/Wallet';
import user from './user';

const rootReducer = combineReducers({ user, wallet });
export default rootReducer;
