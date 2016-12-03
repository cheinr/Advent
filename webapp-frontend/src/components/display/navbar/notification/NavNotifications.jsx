import React from 'react';
import Notification from '../../Notification';

function getPictureUrl(notificationType) {
  if (notificationType.toUpperCase() === 'MESSAGE') {
    return 'https://maxcdn.icons8.com/Share/icon/Messaging//message_outline1600.png';
  } else if (notificationType.toUpperCase() === 'GROUP') {
    return 'https://maxcdn.icons8.com/Share/icon/Users//add_group1600.png';
  }
  // is an event notification
  return 'http://simpleicon.com/wp-content/uploads/Calendar-1.png';
}

export default function NavbarNotifications(props) {
  return (
    <ul className="dropdown-menu notifications">
      {props.notifications.map((notification, id) =>
        <Notification key={id} onClick={() => props.markAsRead(notification.id)} link={notification.link} header={notification.header} message={notification.message} pictureUrl={getPictureUrl(notification.notificationType)} />
      )}
    </ul>
  );
}
