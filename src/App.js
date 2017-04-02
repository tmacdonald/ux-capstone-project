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
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

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

          <Card>
            <CardHeader
              title="Your Upcoming Events"
            />
          </Card>

          <Card>
            <CardHeader
              title="Search for Volunteering Opportunities"
            />
          </Card>

          <Card>
            <CardHeader
              title="View Your Volunteering History"
            />
          </Card>

          <Card>
            <CardHeader
              title="Create Your Volunteering Profile"
            />
          </Card>

          <Drawer 
            docked={false} 
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
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
