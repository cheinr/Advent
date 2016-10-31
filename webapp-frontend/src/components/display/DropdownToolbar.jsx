import React from 'react';

export default function DropdownToolbar(props) {
  return (
    <div className="dropdown-toolbar">
      <div className="dropdown-toolbar-actions">
        <a onClick={props.clickEvent}>Mark all as read</a>
      </div>
      <h3 className="dropdown-toolbar-title">Notifications ({props.numNotifications})</h3>
    </div>
  );
}
