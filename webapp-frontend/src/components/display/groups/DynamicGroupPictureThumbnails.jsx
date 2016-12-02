import React from 'react';
import GroupPictureThumbnail from './GroupPictureThumbnail';

const propTypes = {
  groups: React.PropTypes.array,
};

export default function DynamicGroupPictureThumbnails(props) {
  return (
    <div className="row">
      <div className="col-sm-6 col-md-4">
        {props.groups.map((group, index) => {
          if (index % 3 === 0) {
            return (
              <GroupPictureThumbnail
                key={index}
                groupId={group.id}
                name={group.groupName}
                pictureUrl={group.groupPictureUrl}
              />
            );
          }
          return <div key={index} />;
        })}
      </div>
      <div className="col-sm-6 col-md-4">
        {props.groups.map((group, index) => {
          if (index % 3 === 1) {
            return (
              <GroupPictureThumbnail
                key={index}
                groupId={group.id}
                name={group.groupName}
                pictureUrl={group.groupPictureUrl}
              />
            );
          }
          return <div key={index} />;
        })}
      </div>
      <div className="col-sm-6 col-md-4">
        {props.groups.map((group, index) => {
          if (index % 3 === 2) {
            return (
              <GroupPictureThumbnail
                key={index}
                groupId={group.id}
                name={group.groupName}
                pictureUrl={group.groupPictureUrl}
              />
            );
          }
          return <div key={index} />;
        })}
      </div>
    </div>
  );
}

DynamicGroupPictureThumbnails.propTypes = propTypes;
