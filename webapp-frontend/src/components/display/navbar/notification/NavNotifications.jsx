import React from 'react';
import Notification from '../../Notification';

export default function NavbarNotifications(props) {
  return (
    <ul className="dropdown-menu notifications">
      {props.notifications.map((object, id) =>
        <Notification key={id} link={object.link} header={object.header} message={object.message} pictureUrl="http://wealthfromhome.net/wp-content/uploads/2015/05/message.png" />
      )}
    </ul>
  );
}
