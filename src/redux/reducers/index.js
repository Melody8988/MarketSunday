import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import frontReducer from './frontReducer'
import responsesReducer from './responsesReducer'


const store = combineReducers({
  user,
  login,
  frontReducer,
  responsesReducer
});

export default store;
