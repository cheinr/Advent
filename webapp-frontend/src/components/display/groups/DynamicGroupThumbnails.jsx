import React from 'react';
import GroupThumbnail from './GroupThumbnail';

const propTypes = {
  groups: React.PropTypes.array,
};

export default function DynamicGroupThumbnails(props) {
  return (
    <div className="row">
      {/* TODO dszopa 11/22/16 - Not the most efficient way to get this done but it works */}
      <div className="col-sm-6 col-md-4">
        {props.groups.map((group, index) => {
            if (index % 3 === 0) {
              return (
                <GroupThumbnail
                  key={index}
                  onClick={() => { this.removeUserFromGroup(group.id, index); }}
                  groupId={group.id}
                  name={group.groupName}
                  description={group.description}
                  pictureUrl={group.groupPictureUrl}
                />
              );
            }
            return <div key={index} />;
          }
        )}
      </div>
      <div className="col-sm-6 col-md-4">
        {props.groups.map((group, index) => {
            if (index % 3 === 1) {
              return (
                <GroupThumbnail
                  key={index}
                  onClick={() => { this.removeUserFromGroup(group.id, index); }}
                  groupId={group.id}
                  name={group.groupName}
                  description={group.description}
                  pictureUrl={group.groupPictureUrl}
                />
              );
            }
            return <div key={index} />;
          }
        )}
      </div>
      <div className="col-sm-6 col-md-4">
        {props.groups.map((group, index) => {
            if (index % 3 === 2) {
              return (
                <GroupThumbnail
                  key={index}
                  onClick={() => { this.removeUserFromGroup(group.id, index); }}
                  groupId={group.id}
                  name={group.groupName}
                  description={group.description}
                  pictureUrl={group.groupPictureUrl}
                />
              );
            }
            return <div key={index} />;
          }
        )}
      </div>
    </div>
  );
}

DynamicGroupThumbnails.propTypes = propTypes;
