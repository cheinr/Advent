import React, { Component } from 'react';
import UserList from './UserList';
import { Link } from 'react-router';

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
                    <div>
                        Group: <Link to={`/group/${this.props.event.group.id}`}>
                            {this.props.event.group.groupName}
                        </Link>
                    </div>
                    <div>Private: {this.props.event.private}</div>

                    <div>Going:
                        <UserList users={this.props.event.eventResponses.filter(function(e) {
                            return e.response == "going"
                        })}/>
                    </div>
                    <div>Maybe:
                        <UserList users={this.props.event.eventResponses.filter(function(e) {
                            return e.response == "maybe"
                        })}/>
                    </div>
                    <div>Invited:
                        <UserList users={this.props.event.eventResponses.filter(function(e) {
                            return e.response == "invited"
                        })}/>
                    </div>

                    <button className="btn btn-default" onClick={() => {this.props.respondToEvent("going")}}>
                        Going
                    </button>
                    <button className="btn btn-default" onClick={() => {this.props.respondToEvent("maybe")}}>
                        Maybe
                    </button>
                    <button className="btn btn-default" onClick={() => {this.props.respondToEvent("not going")}}>
                        Not Going
                    </button>
                </div>
            </div>
        );
    }
}