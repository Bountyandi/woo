import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/store';

const target = document.getElementById('root');

render(
  <Provider store={store}>
    <div>
      <App/>
    </div>
  </Provider>,
  target
);
