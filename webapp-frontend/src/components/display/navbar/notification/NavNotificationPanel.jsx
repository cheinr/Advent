import React from 'react';

export default function NavbarNotificationPanel(props) {
  return (
    <a href="#notifications-panel" className="dropdown-toggle" data-toggle="dropdown">
      <i data-count={props.numNotifications} className="glyphicon glyphicon-bell notification-icon" />
    </a>
  );
}