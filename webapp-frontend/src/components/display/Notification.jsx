import React from 'react';

export default function Notification(props) {
  return (
    <li className="notification">
      <div className="media">
        <div className="media-left">
          <div className="media-object">
            <img src={props.pictureUrl} height="50" width="50" className="img-rounded" alt="Notification" />
          </div>
        </div>
        <div className="media-body">
          <strong className="notification-title"><a href={props.link}>{props.header}</a></strong>
          <p className="notification-desc">{props.message}</p>
        </div>
      </div>
    </li>
  );
}
