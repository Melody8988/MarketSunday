import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import frontReducer from './frontReducer'
// import updateTitleReducer from './updateTitleReducer'
// import updateDescriptionReducer from './updateDescriptionReducer'
// import addImageReducer from './addImageReducer';
// import deleteReducer from './deleteReducer';

const store = combineReducers({
  user,
  login,
  frontReducer,
  // deleteReducer
  // addImageReducer
  // updateTitleReducer,
  // updateDescriptionReducer

});

export default store;
