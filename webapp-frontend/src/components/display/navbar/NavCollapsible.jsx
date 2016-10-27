import React from 'react';

export default function NavbarCollapsible(props) {
  return (
    <div className="collapse navbar-collapse">
      {props.children}
    </div>
    );
}
