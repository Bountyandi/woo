import {
  SWITCH_VIEW
} from '../actions/actionsTypes';


const initialState = 'AuthDataView';

export const currentView = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_VIEW:
      return action.viewName;

    default:
      return state
  }
};
