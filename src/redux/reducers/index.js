import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import frontReducer from './frontReducer'

const store = combineReducers({
  user,
  login,
  frontReducer
});

export default store;
