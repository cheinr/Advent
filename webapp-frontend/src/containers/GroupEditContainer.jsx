import React, { Component } from 'react';
import axios from 'axios';
import GroupEdit from '../components/GroupEdit';

export default class GroupEditContainer extends Component {
  static get contextTypes() {
    return { router: React.PropTypes.object.isRequired, };
  }

  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      description: '',
      groupPictureUrl: '',
      userGroups: null,
    };
    this.nameChange = this.nameChange.bind(this);
    this.descChange = this.descChange.bind(this);
    this.groupPictureUrlChange = this.groupPictureUrlChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.getGroup();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user !== this.props.user && this.state.userGroups !== null) {
      if (!this.checkUserIsAdmin(newProps.user, this.state.userGroups)) {
        window.location.replace('/');
      }
    }
  }

  checkUserIsAdmin(user, userGroups) {
    let userIsAdmin = false;
    for (let i = 0; i < userGroups.length; i++) {
      if (userGroups[i].user.id === user.id
        && (userGroups[i].role.toUpperCase() === 'ADMIN'
        || userGroups[i].role.toUpperCase() === 'OWNER')) {
        userIsAdmin = true;
      }
    }

    return userIsAdmin;
  }

  getGroup() {
    const url = `/api/group/${this.props.params.groupId}`;
    axios({
      method: 'get',
      url,
    })
      .then((resp) => {
        if (this.props.user !== null) {
          if (!this.checkUserIsAdmin(this.props.user, resp.data.userGroups)) {
            // TODO - use router here.
            window.location.replace('/');
          }
        }

        this.setState({
          id: resp.data.id,
          name: resp.data.groupName,
          description: resp.data.description,
          groupPictureUrl: resp.data.groupPictureUrl,
          userGroups: resp.data.userGroups,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  groupPictureUrlChange(e) {
    this.setState({ groupPictureUrl: e.target.value });
  }

  nameChange(e) {
    this.setState({ name: e.target.value });
  }

  descChange(e) {
    this.setState({ description: e.target.value });
  }

  submitForm() {
    const url = '/api/group/edit/';
    const data = {
      id: this.state.id,
      groupName: this.state.name,
      description: this.state.description,
      groupPictureUrl: this.state.groupPictureUrl,
    };
    axios({
      method: 'post',
      url,
      data,
    })
      .then((response) => {
        this.context.router.push(`/group/${this.props.params.groupId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <div>
        <GroupEdit
          nameChange={this.nameChange}
          descChange={this.descChange}
          groupPictureUrlChange={this.groupPictureUrlChange}
          submitForm={this.submitForm}
          values={this.state}
        />
      </div>
    );
  }
}
