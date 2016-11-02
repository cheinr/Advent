import React from 'react';

export default function NavbarDropdown(props) {
  return (
    <li className="dropdown">
      {props.children}
    </li>
  );
}