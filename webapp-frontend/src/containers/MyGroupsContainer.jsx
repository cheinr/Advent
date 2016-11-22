import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import GroupThumbnail from '../components/display/groups/GroupThumbnail';

export default class MyGroupsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myGroups: [],
    };
    this.removeUserFromGroup = this.removeUserFromGroup.bind(this);
  }

  componentWillMount() {
    axios.get(`/api/group/user/${localStorage.id}`)
      .then((response) => {
        this.setState({ myGroups: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeUserFromGroup(groupId, index) {
    axios.post(`/api/remove/user/${localStorage.id}/group/${groupId}`)
      .then((response) => {
        const newMyGroups = this.state.myGroups;
        newMyGroups.splice(index, 1);
        this.setState({
          myGroups: newMyGroups,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-5"></div>
          <div className="col-xs-7">
            <div className="row">
              <h1 className="pull-left">My Groups</h1>
              <Link to="/group/create" className="btn btn-lg btn-success pull-right align-with-h1" role="button">Create Group</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <hr />
        </div>
        <div className="row">
          {/* TODO dszopa 11/22/16 - Not the most efficient way to get this done but it works */}
          <div className="col-sm-6 col-md-4">
            {this.state.myGroups.map((group, index) => {
                if (index % 3 === 0) {
                  return <GroupThumbnail key={index} onClick={() => {this.removeUserFromGroup(group.id, index)}} num={group.id} name={group.groupName} description={group.description} pictureUrl={group.groupPictureUrl} />;
                }
                return;
              }
            )}
          </div>
          <div className="col-sm-6 col-md-4">
            {this.state.myGroups.map((group, index) => {
                if (index % 3 === 1) {
                  return <GroupThumbnail key={index} onClick={() => {this.removeUserFromGroup(group.id, index)}} num={group.id} name={group.groupName} description={group.description} pictureUrl={group.groupPictureUrl} />;
                }
                return;
              }
            )}
          </div>
          <div className="col-sm-6 col-md-4">
            {this.state.myGroups.map((group, index) => {
                if (index % 3 === 2) {
                  return <GroupThumbnail key={index} onClick={() => {this.removeUserFromGroup(group.id, index)}} num={group.id} name={group.groupName} description={group.description} pictureUrl={group.groupPictureUrl} />;
                }
                return;
              }
            )}
          </div>
        </div>
      </div>
    );
  }
}
