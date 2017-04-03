import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class UpcomingEvents extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader
                title="Your Upcoming Events"
                />
                <CardText>
                    <Table>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn>Soup Kitchen</TableRowColumn>
                                <TableRowColumn>April 7</TableRowColumn>
                                <TableRowColumn>5pm</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Beach Volleyball Tournament</TableRowColumn>
                                <TableRowColumn>August 7</TableRowColumn>
                                <TableRowColumn>8am</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                
                </CardText>
            </Card>
        )
    }
}