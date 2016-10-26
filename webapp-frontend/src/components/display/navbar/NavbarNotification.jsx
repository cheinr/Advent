import React from 'react';
import NavbarDropdown from './NavbarDropdown';
import Notification from '../Notification';

export default function NavbarNotification(props) {
  // TODO dszopa 10/26/16 - Make this component useful
  return (
    <NavbarDropdown>
      <a href={props.link} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        <span className="glyphicon glyphicon-bell" /> <span className="badge"> {props.notifications.length} </span>
      </a>
      <ul className="dropdown-menu">
        {/* TODO dszopa 10/25/16 - Make this a notification component */}
        {props.notifications.map((object, i) =>
          <Notification link={object.link} message={object.message} pictureUrl="http://wealthfromhome.net/wp-content/uploads/2015/05/message.png" />
        )}
      </ul>
    </NavbarDropdown>
  );
}
