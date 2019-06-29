import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import restaurantsReducer from './restaurantsReducer';

export default combineReducers({
  auth: authReducer,
  restaurants: restaurantsReducer,
  form: formReducer
});