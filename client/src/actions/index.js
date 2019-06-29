import axios from 'axios';
import { 
  AUTH_USER, 
  AUTH_ERROR, 
  GET_RESTAURANTS
} from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('/signup', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email in use'
    });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('/signin', formProps);
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid login credentials'
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};

export const getRestaurants = (formProps) => async dispatch => {
  const response = await axios.get('/api/restaurants', { 
    params: {
      searchTerm: formProps.searchTerm,
      searchLocation: formProps.searchLocation,
      searchOpen: formProps.searchOpen
    }
  });

  dispatch({
    type: GET_RESTAURANTS,
    payload: response.data
  });
};