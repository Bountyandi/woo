import * as types from './actionsTypes'
import { PROGRESS_INCREASE } from './actionsTypes';


export const switchView = viewName => {
  return {
    type: types.SWITCH_VIEW,
    viewName
  }
};

export const clearData = () => {
  return {
    type: types.CLEAR_DATA
  }
};

export const setAuthData = data => {
  return {
    type: types.SET_AUTH_DATA,
    data
  }
};

export const setPersonalData = data => {
  return {
    type: types.SET_PERSONAL_DATA,
    data
  }
};

export const increaseProgress = value => {
  return {
    type: types.PROGRESS_INCREASE,
    value
  }
};

export const decreaseProgress = value => {
  return {
    type: types.PROGRESS_DECREASE,
    value
  }
};