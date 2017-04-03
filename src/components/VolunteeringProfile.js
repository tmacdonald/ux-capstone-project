import React from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card'

import RaisedButton from 'material-ui/RaisedButton';

const style = {
  "margin-left": 12,
};

export default class VolunteeringProfile extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title="Create Your Volunteering Profile"
                />
                <CardText>
                    Help opportunities find you
                </CardText>
                <CardActions>
                    <RaisedButton label="Create your profile now" primary={true} style={style} />
                </CardActions>
            </Card>
        )
    }
}