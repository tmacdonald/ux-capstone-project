import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { message, changeMessage } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{message}</h2>
        </div>
        <p className="App-intro">
          <button onClick={changeMessage}>Change message</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.message
})

const mapDispatchToProps = (dispatch) => ({
  changeMessage: () => {
    //dispatch({ type: 'CHANGE_MESSAGE', message: 'This is a new message' })
    dispatch((dispatcher) => {
      console.log('dispatching REQUEST_MESSAGES')
      dispatcher({ type: 'REQUEST_MESSAGES' })
      setTimeout(() => {
        console.log('dispatching REQUEST_MESSAGES_DONE')
        dispatcher({ type: 'REQUEST_MESSAGES_DONE', message: 'This is a new message '})
      }, 1000)
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
