import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import frontReducer from './frontReducer'
import updateTitleReducer from './updateTitleReducer'

const store = combineReducers({
  user,
  login,
  frontReducer,
  updateTitleReducer

});

export default store;
