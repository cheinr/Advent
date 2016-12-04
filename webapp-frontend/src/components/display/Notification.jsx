import React from 'react';
import { Link } from 'react-router';

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
          <strong className="notification-title"><Link onClick={() => props.onClick()} to={props.link}>{props.header}</Link></strong>
          <p className="notification-desc">{props.message}</p>
        </div>
      </div>
    </li>
  );
}
