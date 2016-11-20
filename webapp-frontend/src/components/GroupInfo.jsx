import React, { Component } from 'react';
import { Link } from 'react-router';
import EventList from '../components/EventList';
import UserGroupList from './UserGroupList';

export default class GroupInfo extends Component {
    componentDidMount() {

    }

    render() {
	
	var moderator_buttons = "";
	if(this.props.roleWithGroup == "MODERATOR") {
	    moderator_buttons =
		(<div><Link className="btn btn-default" role="button"
		      to={`/event/create/${this.props.groupId}`}>
		    Create Event
		</Link>
		<Link className="btn btn-default" role="button"
                      to={`/group/edit/${this.props.groupId}`}>
                    Edit Group
		</Link></div>);
	}

	var join_button = "";
	if(this.props.roleWithGroup == null) {
	    join_button =
		(<button className="btn btn-default"
			 onClick={this.props.joinGroup}>
                    Join Group
		</button>);
	}
	
        return (
            <div>
                <h1>
                    <div>{this.props.group.name}</div>
                </h1>
                <div className="form-group">
                    <div>Description: {this.props.group.description}</div>
                </div>
                <div className="form-group">
                    <div>Upcoming Events: <Link to={`/group/calendar/${this.props.groupId}`}>(View Group Calendar)</Link></div>
                    <EventList events={this.props.group.events}/>
                </div>
                <div className="form-group">
                    <div>Users:</div>
                    <UserGroupList users={this.props.group.users}/>
                </div>

		{moderator_buttons}
		{join_button}
		
		<Link className="btn btn-default"
                      to={`/chat/group/${this.props.groupId}`}>
                    Group Chat
                </Link>
		
            </div>
        );
    }
}
