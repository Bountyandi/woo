export const ViewsStates = {
  'AuthDataView': {
    viewName: 'AuthDataView',
    transitionNext: 'PersonalView',
  },
  'PersonalView': {
    viewName: 'PersonalView',
    transitionBack: 'AuthDataView',
    transitionNext: 'ThanksView'
  },
  'ThanksView': {
    viewName: 'ThanksView'
  }
};