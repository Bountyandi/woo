import ViewsFsmCtrl from '../helpers/ViewsFsmCtrl';
import { ViewsStates } from '../helpers/ViewsStates';
import { switchView } from './actions';

const ViewsFSM = new ViewsFsmCtrl({
  currentState: Object.keys(ViewsStates)[0], // take first one
  states: ViewsStates,
  switchView
});

export default ViewsFSM
