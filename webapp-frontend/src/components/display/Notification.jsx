import React from 'react';

export default function Notification(props) {
  // TODO dszopa 10/25/16 - Implement Notification with the bootstrap extension class
  return (
    <div>
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


      <li className="notification">
        <div className="media">
          <div className="media-left">
            <div className="media-object">
              <img src="http://icons.iconarchive.com/icons/sora-meliae/matrilineare/1024/Mimes-image-x-generic-icon.png" height="50" width="50" className="img-rounded" alt="Name" />
            </div>
          </div>
          <div className="media-body">
            <strong className="notification-title"><a href="#">James Bond</a> resolved <a href="#">B-007 - Desolve Spectre organization</a></strong>

            <div className="notification-meta">
              <small className="timestamp">1. 9. 2015, 08:00</small>
            </div>

          </div>
        </div>
      </li>
    </div>
  );
}
