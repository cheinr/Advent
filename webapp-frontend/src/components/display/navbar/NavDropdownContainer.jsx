import React from 'react';

export default function NavbarDropdownContainer(props) {
  return (
    <div className="dropdown-container dropdown-position-bottomright">
      {props.children}
    </div>
  );
}
