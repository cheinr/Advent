import React from 'react';
import { Link } from 'react-router';
import EventList from './events/EventList';
import UserGroupList from './UserGroupList';
import Thumbnail from '../components/display/Thumbnail';
import PageHeader from '../components/display/PageHeader';
import Announcement from '../components/display/Announcement';

const propTypes = {
  roleWithGroup: React.PropTypes.string,
  group: React.PropTypes.any,
  announcements: React.PropTypes.array,
  groupId: React.PropTypes.string,
  joinGroup: React.PropTypes.any,
  leaveGroup: React.PropTypes.any,
};

export default function GroupInfo(props) {
  const announcementHeader = props.announcements.length !== 0 ? <b>Announcements:</b> : '';

  let buttons = '';

  if (props.roleWithGroup == null) {
    buttons = (
      <div className="btn-group btn-group-justified" role="group">
        <div className="btn-group">
          <button className="btn btn-default" onClick={props.joinGroup}>JoinGroup</button>
        </div>
        <Link className="btn btn-success" to={`/chat/group/${props.groupId}`}>Group Chat</Link>
      </div>
    );
  } else if (props.roleWithGroup.toUpperCase() === 'Moderator') {
    buttons = (
      <div className="btn-group btn-group-justified" role="group">
        <div className="btn-group">
          <button className="btn btn-default" onClick={props.leaveGroup}>Leave Group</button>
        </div>
        <Link className="btn btn-default" role="button" to={`/event/create/${props.groupId}`}>Create Event</Link>
        <Link className="btn btn-success" to={`/chat/group/${props.groupId}`}>Group Chat</Link>
      </div>
    );
  } else if (props.roleWithGroup.toUpperCase() === 'ADMIN' || props.roleWithGroup.toUpperCase() === 'OWNER') {
    buttons = (
      <div className="btn-group btn-group-justified" role="group">
        <div className="btn-group">
          <button className="btn btn-default" onClick={props.leaveGroup}>Leave Group</button>
        </div>
        <Link className="btn btn-default" role="button" to={`/event/create/${props.groupId}`}>Create Event</Link>
        <Link className="btn btn-success" to={`/chat/group/${props.groupId}`}>Group Chat</Link>
        <Link className="btn btn-warning" role="button" to={`/group/edit/${props.groupId}`}>Edit Group</Link>
      </div>
    );
  } else {
    buttons = (
      <div className="btn-group btn-group-justified" role="group">
        <div className="btn-group">
          <button className="btn btn-default" onClick={props.joinGroup}>JoinGroup</button>
        </div>
        <Link className="btn btn-success" to={`/chat/group/${props.groupId}`}>Group Chat</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="row pull-down">
        <div className="col-xs-3">
          <Thumbnail pictureUrl={props.group.groupPictureUrl} altText="Group" />
        </div>
        <div className="col-xs-9">
          <PageHeader title={props.group.name} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 center-text xs-padding-bottom">
          { buttons }
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
        { announcementHeader }
        {props.announcements.map((announcement, id) =>
          <Announcement key={id} title={announcement.title} content={announcement.content} date={new Date(announcement.date)} group={announcement.groupDTO} />
        )}
      </div>
      <div className="form-group">
        <div><b>Users:</b></div>
        <UserGroupList users={props.group.users} />
      </div>
    </div>
  );
}

GroupInfo.propTypes = propTypes;
