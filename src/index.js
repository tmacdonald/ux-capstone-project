import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

const logger = store => next => action => {
  console.group(action.type)
  console.log('before', store.getState());
  next(action)
  console.log('after', store.getState())
  console.groupEnd(action.type)
}

const delay = store => next => action => {
  setTimeout(() => next(action), 1000)
}

const thunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch)
  } else {
    next(action)
  }  
}

const reducer = (state = { } , action) => {
  if (action.type === 'CHANGE_MESSAGE') {
    return { message: action.message }
  } else if (action.type === 'REQUEST_MESSAGES_DONE') {
    console.log('handling REQUEST_MESSAGES_DONE')
    return { message: action.message }
  }
  return state
}

const store = createStore(reducer, { message: "Hello, React" }, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
