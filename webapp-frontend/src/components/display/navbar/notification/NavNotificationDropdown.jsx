import React from 'react';

export default function NavbarNotificationDropdown(props) {
  return (
    <li className="dropdown dropdown-notifications">
      {props.children}
    </li>
  );
}