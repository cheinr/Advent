import React, { Component } from 'react';
import { Link } from 'react-router';
import EventList from './events/EventList';
import UserGroupList from './UserGroupList';

export default class GroupInfo extends Component {
    componentDidMount() {

    }

    render() {
	
	var buttons = "";
	
	if (this.props.roleWithGroup == null) {
	    buttons = (
		<div>
		    <button className="btn btn-default"
			    onClick={this.props.joinGroup}>
			Join Group
		    </button>
		    <Link className="btn btn-success"
			  to={`/chat/group/${this.props.groupId}`}>
			Group Chat
		    </Link>
		</div>
	    );
	} else if(this.props.roleWithGroup.toUpperCase() == "MODERATOR") {
	    buttons =
		(<div><Link className="btn btn-default" role="button"
			    to={`/event/create/${this.props.groupId}`}>
		    Create Event
		</Link>
		<Link className="btn btn-success"
                      to={`/chat/group/${this.props.groupId}`}>
                    Group Chat
                </Link>

		</div>);
	} else if(this.props.roleWithGroup.toUpperCase() == "ADMIN"
		  || this.props.roleWithGroup.toUpperCase() == "OWNER") {
	    buttons = (
		<div>
		    <Link className="btn btn-primary" role="button"
			  to={`/event/create/${this.props.groupId}`}>
			Create Event
		    </Link>
		    <Link className="btn btn-danger" role="button"
			  to={`/group/edit/${this.props.groupId}`}>
			Edit Group
		    </Link>
		    <Link className="btn btn-success"
			  to={`/chat/group/${this.props.groupId}`}>
			Group Chat
                    </Link>

		</div>
	    );
	} else {
	    buttons = (
		<Link className="btn btn-success"
		      to={`/chat/group/${this.props.groupId}`}>
		    Group Chat
                </Link>
	    );
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
                    <UserGroupList users={this.props.group.users} role={this.props.roleWithGroup} updateGroup={this.props.updateGroup}/>
                </div>


		{buttons}
		
		
            </div>
        );
    }
}
