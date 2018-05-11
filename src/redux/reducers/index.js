import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import frontReducer from './frontReducer';
import responsesReducer from './responsesReducer';
import shopInfoReducer from './shopInfoReducer';


const store = combineReducers({
  user,
  login,
  frontReducer,
  responsesReducer,
  shopInfoReducer
});

export default store;
