import React from 'react';

export default function Notification(props) {
  // TODO dszopa 10/25/16 - Implement Notification with the bootstrap extension class
  return (
    <li>
      <div className="row">
        <a href={props.link}>
          <div className="col-xs-3">
            <img className="img-responsive" src={props.pictureUrl} alt={props.altText} />
            <img width="200" height="200" src={props.pictureUrl} alt={props.altText} />
          </div>
          <div className="col-xs-9">
            <p>
              {props.message}
            </p>
          </div>
        </a>
      </div>
    </li>
  );
}
