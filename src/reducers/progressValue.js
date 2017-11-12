import {
  PROGRESS_INCREASE,
  PROGRESS_DECREASE
} from '../actions/actionsTypes';

// need to use Immutable js
const initialState = 0;

export const progressValue = (state = initialState, action) => {
  switch (action.type) {

    case PROGRESS_INCREASE:
      return action.value;

    case PROGRESS_DECREASE:
      return action.value;

    default:
      return state
  }
};
