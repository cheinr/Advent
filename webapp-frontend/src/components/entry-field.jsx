import React from 'react';

export default function EntryField(props) {
  return (
    <div className="input-group">
      <span className="input-group-addon" id="sizing-addon2">{props.fieldName}</span>
      <input type="text" className="form-control" placeholder={props.placeholder} aria-describedby="sizing-addon2" />
    </div>
  );
}