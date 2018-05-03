import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import frontReducer from './frontReducer'
import updateTitleReducer from './updateTitleReducer'
import updateDescriptionReducer from './updateDescriptionReducer'

const store = combineReducers({
  user,
  login,
  frontReducer,
  updateTitleReducer,
  updateDescriptionReducer

});

export default store;
