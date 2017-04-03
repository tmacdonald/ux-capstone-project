import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  "margin-left": 12,
};


export default class SearchEvents extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader
                title="Search for Volunteering Opportunities"
                />
                <CardText>
                    There are over 40 volunteering opportunities in your area
                </CardText>
                <CardActions>
                    <RaisedButton label="Search" primary={true} style={style}/>
                </CardActions>
            </Card>
        )
    }
}