import React from 'react';

export default function Announcement(props) {
  return (
    <div className="media">
      <div className="media-left">
        <a href={props.group.groupPictureUrl}>
          <img className="media-object media-image" src={props.group.groupPictureUrl} alt="group" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{props.title}</h4>
        <p className="no-margin-bottom">{props.content}</p>
        <p>
          {/* TODO dszopa 11/21/16 - Might want to change this but pretty low priority */}
          {props.date.toDateString()}
        </p>
      </div>
    </div>
  );
}
