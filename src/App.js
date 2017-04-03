import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Schedule from 'material-ui/svg-icons/action/schedule';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

import UpcomingEvents from './components/UpcomingEvents';
import SearchEvents from './components/SearchEvents';
import VolunteeringHistory from './components/VolunteeringHistory';
import VolunteeringProfile from './components/VolunteeringProfile';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }

    this.onTap = this.onTap.bind(this);
  }

  onTap() {
    this.setState({ open: !this.state.open });
  }

  render() {
    
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="Volunteering"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.onTap}
          />  

          <UpcomingEvents />

          <SearchEvents />

          <VolunteeringHistory />

          <VolunteeringProfile />

          <Drawer 
            docked={false} 
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem leftIcon={<Schedule />}>Volunteering Schedule</MenuItem>
            <MenuItem>Search for Events</MenuItem>
            <MenuItem>View Volunteering History</MenuItem>
            <MenuItem>Create a Volunteering Profile</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>      
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
