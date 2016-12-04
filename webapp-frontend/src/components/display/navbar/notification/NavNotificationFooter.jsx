import React from 'react';

export default function NavbarNotificationFooter(props) {
  return (
    <div className="dropdown-footer text-center">
      <a onClick={props.clickEvent}>View All</a>
    </div>
  );
}