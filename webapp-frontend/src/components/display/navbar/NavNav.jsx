import React from 'react';

export default function NavbarNav(props) {
  return (
    <ul className="nav navbar-nav">
      {/* Takes a list of <li> children that are rendered into navs */}
      {props.children}
    </ul>
  );
}