import React, { Component } from 'react';
import { Link } from 'react-router';
import EventList from '../components/EventList';

export default class GroupInfo extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>
                    <div>{this.props.group.name}</div>
                </h1>
                <div className="form-group">
                    <div>Description: {this.props.group.description}</div>
                </div>
                <div className="form-group">
                    <div>Upcoming Events:</div>
                    <EventList events={this.props.group.events}/>
                </div>
                <Link className="btn btn-default" role="button"
                      to={`/event/create/${this.props.groupId}`}>
                    Create Event
                </Link>
            </div>
        );
    }
}