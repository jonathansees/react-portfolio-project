import _ from 'lodash';
import { GET_RESTAURANTS } from '../actions/types';

export default (state = {}, actions) => {
  switch (actions.type) {
    case GET_RESTAURANTS:
      return { ...state, ..._.mapKeys(actions.payload, 'id')};

    default:
      return state;
  }
};