import {
  CLEAR_DATA,
  SET_AUTH_DATA,
  SET_PERSONAL_DATA
} from '../actions/actionsTypes';

const initialState = {};

export const authData = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_DATA:
      return action;

    case SET_AUTH_DATA:
      return state;

    case SET_PERSONAL_DATA:
      return state;

    default:
      return state
  }
};
