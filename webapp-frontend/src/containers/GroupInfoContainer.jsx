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
      roleWithGroup: null,
      announcements: [],
    };

    this.getGroup = this.getGroup.bind(this);
    this.getAnnouncements = this.getAnnouncements.bind(this);
    this.joinGroup = this.joinGroup.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }

  componentDidMount() {
    this.getGroup();
    this.getAnnouncements();
  }

  getAnnouncements() {
    axios.get(`/api/announcement/group/first/10/${this.props.params.groupId}`)
      .then((response) => {
        this.setState({
          announcements: response.data,
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
        let userRole = null;
        // check if loged in user is associated with the group
        for (let i = 0; i < response.data.userGroups.length; i++) {
          if (response.data.userGroups[i].user.id === this.props.user.id) {
            userRole = response.data.userGroups[i].role;
          }
        }

	  var events = [];
	  if(userRole == null) {
	      for(var i=0; i<response.data.events.length; i++) {
		  if(!response.data.events[i].private) {
		      events.push(response.data.events[i]);
		  }
	      }
	  } else {
	      events = response.data.events;
	  }
        this.setState({
          group: {
            id: response.data.id,
            name: response.data.groupName,
            description: response.data.description,
            events: events,
            users: response.data.userGroups,
            groupPictureUrl: response.data.groupPictureUrl,
          },
          roleWithGroup: userRole,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  leaveGroup() {
    axios.post(`/api/remove/user/current/group/${this.props.params.groupId}`)
      .then((response) => {
        this.getGroup();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  joinGroup() {
    const url = `/api/join/group/${this.props.params.groupId}`;
    axios({
      method: 'post',
      url,
    })
      .then((response) => {
        this.getGroup();
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
          joinGroup={this.joinGroup}
          leaveGroup={this.leaveGroup}
          announcements={this.state.announcements}
          roleWithGroup={this.state.roleWithGroup}
        />
      </div>
    );
  }
}
