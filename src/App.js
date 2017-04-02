import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';

class App extends Component {
  render() {
    const { messages } = this.props

    const listItems = messages.map(message => <li>{message}</li>)

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages
})

const mapDispatchToProps = (dispatch) => ({
  changeMessage: () => {
    dispatch(actions.retrieveMessages)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
