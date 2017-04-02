import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';

class App extends Component {
  render() {
    const { changeMessage, messages } = this.props

    const listItems = messages.map(message => <li>{message}</li>)

    return (
      <div>
        <h1>Skeleton</h1>
        <ul>
          {listItems}
        </ul>
        <button className="button button-primary" onClick={changeMessage}>Anchor button</button>
      </div>
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
