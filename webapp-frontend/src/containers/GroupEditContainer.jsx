import React, { Component } from 'react';
import axios from 'axios';
import GroupEdit from '../components/GroupEdit';

export default class GroupEditContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      description: '',
    };
    this.nameChange = this.nameChange.bind(this);
    this.descChange = this.descChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.getGroup();
  }

  getGroup() {
    const url = `/api/group/${this.props.params.groupId}`;
    axios.get(url)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.groupName,
          description: response.data.description,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
    };
    axios({
      method: 'post',
      url,
      data,
    })
      .then((response) => {
        // Form was submitted
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
          submitForm={this.submitForm}
          values={this.state}
        />
      </div>
    );
  }
}
