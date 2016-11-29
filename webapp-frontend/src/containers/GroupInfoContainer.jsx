import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import GroupInfo from '../components/GroupInfo';

export default class GroupInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: {
        id: '',
        name: '',
        description: '',
        events: [],
        users: [],
        groupPictureUrl: '',
      },
      announcements: [],
      isUserInGroup: false,
    };

    this.getGroup = this.getGroup.bind(this);
    this.getIfCurrentUserInGroup = this.getIfCurrentUserInGroup.bind(this);
    this.getAnnouncements = this.getAnnouncements.bind(this);
    this.joinGroup = this.joinGroup.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }

  componentDidMount() {
    this.getGroup();
    this.getIfCurrentUserInGroup();
    this.getAnnouncements();
  }

  getAnnouncements() {
    axios.get(`/api/announcement/group/${this.props.params.groupId}`)
      .then((response) => {
        this.setState({
          announcements: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getIfCurrentUserInGroup() {
    axios.get(`/api/membership/current/user/group/${this.props.params.groupId}`)
      .then((response) => {
        this.setState({
          isUserInGroup: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getGroup() {
    const url = `/api/group/${this.props.params.groupId}`;

    axios.get(url)
      .then((response) => {
        this.setState({
          group: {
            id: response.data.id,
            name: response.data.groupName,
            description: response.data.description,
            events: response.data.events,
            users: response.data.userGroups,
            groupPictureUrl: response.data.groupPictureUrl,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  leaveGroup() {
    axios.post(`/api/remove/user/current/group/${this.props.params.groupId}`)
      .then((response) => {
        this.setState({
          isUserInGroup: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  joinGroup() {
    const role = 'member';
    // TODO use user id
    const url = `/api/join/user/${this.props.user.id}/group/${this.props.params.groupId}/role/${role}`;
    axios({
      method: 'post',
      url,
    })
      .then((response) => {
        this.getGroup();
        this.setState({
          isUserInGroup: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <GroupInfo
          group={this.state.group}
          groupId={this.props.params.groupId}
          isInGroup={this.state.isUserInGroup}
          joinGroup={this.joinGroup}
          leaveGroup={this.leaveGroup}
          announcements={this.state.announcements}
        />
      </div>
    );
  }
}
