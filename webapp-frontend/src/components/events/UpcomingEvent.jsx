import React from 'react';
import { Link } from 'react-router';

const propTypes = {
  eventDate: React.PropTypes.any,
  pictureUrl: React.PropTypes.string,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  location: React.PropTypes.string,
  eventId: React.PropTypes.number,
};

export default function UpcomingEvent(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{props.eventDate} in {props.location}</h3>
      </div>
      <div className="panel-body">
        <div className="media">
          <div className="media-left">
            <a href={props.pictureUrl}>
              <img className="media-object media-image" src={props.pictureUrl} alt="Upcoming Event" />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">
              <Link className="black-link" to={`/event/${props.eventId}`}>{props.name}</Link>
            </h4>
            <p>
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

UpcomingEvent.propTypes = propTypes;
