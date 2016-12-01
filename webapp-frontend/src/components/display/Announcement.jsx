import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';
import dateFormat from 'dateformat';

const propTypes = {
  content: React.PropTypes.string,
  group: React.PropTypes.object,
  date: React.PropTypes.object,
};

export default function Announcement(props) {
  const timeString = dateFormat(props.date, 'h:MM TT');
  const dateString = dateFormat(props.date, 'm/d/yyyy');

  return (
    <div className="panel panel-default">
      <div className="panel-body no-padding-bottom">
        <div className="row flex-display">
          <a className="picture-padding" href={props.group.groupPictureUrl}>
            <img className="media-object media-image" src={props.group.groupPictureUrl} alt="Group" />
          </a>
          <h3>
            <Link className="font-bold black-link" to={`/group/${props.group.id}`}>{props.group.groupName}</Link>
            &nbsp;posted at {timeString} on {dateString}
          </h3>
        </div>
        <div className="row">
          <hr className="xs-margin-bottom xs-margin-top" />
        </div>
        <div className="row">
          <div className="col-xs-12">
            <ReactMarkdown escapeHtml source={props.content} />
          </div>
        </div>
      </div>
    </div>
  );
}

Announcement.propTypes = propTypes;
