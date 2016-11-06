import React from 'react';

export default function Announcement(props) {
  return (
    <div className="media">
      <div className="media-left">
        <a href={props.group.groupPictureUrl}>
          <img className="media-object" src={props.group.groupPictureUrl} alt="group" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{props.title}</h4>
        <p className="no-margin-bottom">{props.content}</p>
        <p>
          {props.date.toDateString()}
        </p>
      </div>
    </div>
  );
}