import store from '../store/store'


export default class abstractFsmController {
  constructor({ currentState, states, switchView }) {
    this.currentState = currentState;
    this.states = states;
    this.switchView = switchView;
  }

  setState = (newState) => {
    if (this.isCanTransite(newState)) {
      this.currentState = newState;

      // call new state action
      this.states[newState]
        .actionOnEnter();

    } else {
      //keep state
      console.log(`Can't transit from '${this.currentState}' to '${newState}'`);
    }
  };

  isCanTransite = (newState) => {
    let transitions = states[this.currentState].transitions;

    return transitions.indexOf(newState) > -1;
  };

  transiteNext = () => {
    let newState = this.states[this.currentState].transitionNext;
    this.currentState = newState;

    store.dispatch(this.switchView(newState));

  };

  transiteBack = () => {
    let newState = this.states[this.currentState].transitionBack;
    this.currentState = newState;

    store.dispatch(this.switchView(newState));
  };

}
