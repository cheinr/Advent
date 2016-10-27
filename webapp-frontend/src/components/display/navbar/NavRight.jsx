import React from 'react';

export default function NavbarRight(props) {
  return (
    <ul className="nav navbar-nav navbar-right">
      {props.children}
    </ul>
  );
}
