import React from 'react';

export default function TextBox(props) {
  return (
    <div>
      <h3>{props.fieldName}</h3>
      <div className="form-group">
        <textarea className="form-control" rows="5" id="comment" placeholder={props.placeholder} />
      </div>
    </div>
  );
}
