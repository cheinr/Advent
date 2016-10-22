import React from 'react';

export default function TextBox(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        className="form-control"
        rows="5"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}
