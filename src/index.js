import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

const reducer = (store = { message: "Hello, React" } , action) => {
  if (action.type == 'CHANGE_MESSAGE') {
    return { message: action.message }
  }
  return store
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
