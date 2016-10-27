import React from 'react';

export default function NavbarNotificationFooter(props) {
  return (
    <div className="dropdown-footer text-center">
      <a href={props.actionLink}>View All</a>
    </div>
  );
}