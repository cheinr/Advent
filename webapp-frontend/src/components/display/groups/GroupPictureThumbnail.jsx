import React from 'react';
import { Link } from 'react-router';

const propTypes = {
  groupId: React.PropTypes.number,
  pictureUrl: React.PropTypes.string,
  name: React.PropTypes.string,
};

export default function GroupPictureThumbnail(props) {
  return (
    <div className="thumbnail">
      <Link to={`/group/${props.groupId}`}>
        <img src={props.pictureUrl} className="black-border" alt="Group" />
        <div className="caption center-text">
          <h3 className="no-margin">{props.name}</h3>
        </div>
      </Link>
    </div>
  );
}

GroupPictureThumbnail.propTypes = propTypes;