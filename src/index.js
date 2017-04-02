import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { retrieveMessages, writePost } from './actions';
import App from './App';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';

const reducer = (state = { } , action) => {
  if (action.type === 'RETRIEVE_MESSAGES') {
    if (action.subtype === 'SUCCESS') {
      return { messages: action.data }
    }
  }
  return state
}

const store = createStore(reducer, { messages: [] }, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//store.dispatch(retrieveMessages)
// writePosts([
//   { time: Date.now(), message: 'Message 1'},
//   { time: Date.now(), message: 'Message 2'},
//   { time: Date.now(), message: 'Message 3'}
// ])
//writePost({ time: Date.now(), message: 'ahhh' })
//writeMessage('here is a second message')