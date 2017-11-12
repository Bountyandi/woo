import { combineReducers } from 'redux';
import { currentView } from './currentView';
import { authData } from './authData';
import { progressValue } from './progressValue';

export default combineReducers({
  currentView,
  authData,
  progressValue
});
