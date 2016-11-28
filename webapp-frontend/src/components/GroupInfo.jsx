import React from 'react';
import { Link } from 'react-router';
import EventList from './events/EventList';
import UserGroupList from './UserGroupList';

const propTypes = {
  isInGroup: React.PropTypes.bool,
  group: React.PropTypes.any,
  groupId: React.PropTypes.number,
  joinGroup: React.PropTypes.any,
  leaveGroup: React.PropTypes.any,
};

export default function GroupInfo(props) {
  // Conditionally render join or leave button for the user
  let joinOrLeaveButton = <button className="btn btn-success" onClick={props.joinGroup}>Join Group</button>;
  if (props.isInGroup) {
    joinOrLeaveButton = <button className="btn btn-danger" onClick={props.leaveGroup}>Leave Group</button>;
  }

  return (
    <div>
      <h1>
        <div>{props.group.name}</div>
      </h1>
      <div className="form-group">
        <div>Description: {props.group.description}</div>
      </div>
      <div className="form-group">
        <div>Upcoming Events: <Link to={`/group/calendar/${props.groupId}`}>(View Group Calendar)</Link></div>
        <EventList events={props.group.events} />
      </div>
      <div className="form-group">
        <div>Users:</div>
        <UserGroupList users={props.group.users} />
      </div>
      <Link className="btn btn-default" role="button" to={`/event/create/${props.groupId}`}>
        Create Event
      </Link>
      { joinOrLeaveButton }
      <Link className="btn btn-default" role="button" to={`/group/edit/${props.groupId}`}>
        Edit Group
      </Link>
      <Link className="btn btn-default" to={`/chat/group/${props.groupId}`}>
        Group Chat
      </Link>
    </div>
  );
}

GroupInfo.propTypes = propTypes;
