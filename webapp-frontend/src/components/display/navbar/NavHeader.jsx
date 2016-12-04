import React from 'react';

export default function NavbarHeader(props) {
  return (
    <div className="navbar-header">
      {props.children}
    </div>
  );
}