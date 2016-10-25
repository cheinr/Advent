import React from 'react';
import NavbarDropdown from './NavbarDropdown';

export default function NavbarNotification(props) {
  return (
    <NavbarDropdown>
      <a href={props.link} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        <span className="glyphicon glyphicon-bell" /> <span className="badge"> {props.notifications.length} </span>
      </a>
      <ul className="dropdown-menu">
        {/* TODO dszopa 10/25/16 - Make this a notification component */}
        {props.notifications.map((object, i) =>
          <li><a href={object.link}>{object.message}</a></li>
        )}
      </ul>
    </NavbarDropdown>
  );
}
