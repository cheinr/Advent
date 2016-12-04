import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import DynamicGroupThumbnails from '../components/display/groups/DynamicGroupThumbnails';
import PageBreak from '../components/display/PageBreak';

export default class MyGroupsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myGroups: [],
    };
    this.removeUserFromGroup = this.removeUserFromGroup.bind(this);
  }

  componentWillMount() {
    axios.get('/api/group/my-groups')
      .then((response) => {
        this.setState({ myGroups: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeUserFromGroup(groupId, index) {
    axios.post(`/api/remove/user/current/group/${groupId}`)
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
          <div className="col-xs-5" />
          <div className="col-xs-7">
            <div className="row">
              <h1 className="pull-left">My Groups</h1>
              <Link to="/group/create" className="btn btn-lg btn-success pull-right align-with-h1" role="button">Create Group</Link>
            </div>
          </div>
        </div>
        <PageBreak />
        <DynamicGroupThumbnails groups={this.state.myGroups} />
      </div>
    );
  }
}
