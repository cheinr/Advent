import React from 'react';
import { Link } from 'react-router';

const propTypes = {
  num: React.PropTypes.number,
  pictureUrl: React.PropTypes.string,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default function GroupThumbnail(props) {
  return (
    <div className="thumbnail">
      <img src={props.pictureUrl} alt="Group" />
      <div className="caption">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>
          <Link to={`/group/${props.num}`} className="btn btn-primary" role="button">View Group</Link>
          <button onClick={props.onClick} className="btn btn-danger" role="button">Leave Group</button>
        </p>
      </div>
    </div>
  );
}

GroupThumbnail.propTypes = propTypes;
