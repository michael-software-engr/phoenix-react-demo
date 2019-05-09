import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('app')
);

// ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
