import React, { Component } from 'react';

export default class EventInfo extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Event Information</h1>
                <div className="form-group">
                    <div>Name: {this.props.event.name}</div>
                    <div>Description: {this.props.event.description}</div>
                    <div>Start Date: {this.props.event.startDate}</div>
                    <div>End Date: {this.props.event.endDate}</div>
                    <div>Location: {this.props.event.location}</div>
                    <div>Group: {this.props.event.group}</div>
                    <div>Users Going: {this.props.event.userGoing}</div>
                    <div>Private: {this.props.event.private}</div>
                </div>
            </div>
        );
    }
}