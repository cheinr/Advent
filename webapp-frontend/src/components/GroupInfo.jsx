import React from 'react';
import { Link } from 'react-router';
import EventList from './events/EventList';
import UserGroupList from './UserGroupList';
import Thumbnail from '../components/display/Thumbnail';
import PageHeader from '../components/display/PageHeader';
import Announcement from '../components/display/Announcement';

const propTypes = {
  isInGroup: React.PropTypes.bool,
  group: React.PropTypes.any,
  announcements: React.PropTypes.array,
  groupId: React.PropTypes.string,
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
      <div className="row pull-down">
        <div className="col-xs-3">
          <Thumbnail pictureUrl={props.group.groupPictureUrl} altText="User" />
        </div>
        <div className="col-xs-9">
          <PageHeader title={props.group.name} />
        </div>
      </div>
      <div className="form-group">
        <div><b>Description: </b>{props.group.description}</div>
      </div>
      <div className="form-group">
        <div><b>Upcoming Events: </b><Link to={`/group/calendar/${props.groupId}`}>(View Group Calendar)</Link></div>
        <EventList events={props.group.events} />
      </div>
      <div className="form-group">
        <b>Announcements:</b>
        {/* group announcements should go here */}
        {/* toggle being able to see users for the group? */}
        {props.announcements.map((announcement, id) =>
          <Announcement key={id} title={announcement.title} content={announcement.content} date={new Date(announcement.date)} group={announcement.groupDTO} />
        )}
      </div>
      <div className="form-group">
        <div><b>Users:</b></div>
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
