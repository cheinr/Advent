import React from 'react';

export default function EntryField(props) {
  return (
    <div>
      <h3>{props.fieldName}</h3>
      <input type="text" className="form-control" placeholder={props.placeholder} />
    </div>
  );
}