import React from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import Alert from '../components/feedback/Alert';
import Error from '../components/feedback/Error';
import TextBox from '../components/input/TextBox';
import Thumbnail from '../components/display/Thumbnail';
import BSLabel from '../components/display/BSLabel';
import PageBreak from '../components/display/PageBreak';
import DynamicGroupThumbnails from '../components/display/groups/DynamicGroupThumbnails';
import BasicInputField from '../components/input/BasicInputField';

export default class UserSettingContainer extends React.Component {
  static get contextTypes() {
    return { router: React.PropTypes.object.isRequired };
  }

  constructor(props) {
    super(props);
    this.state = {
      myGroups: [],
      id: '',
      displayName: '',
      email: '',
      description: '',
      pictureUrl: '',
    };
    this.displayNameChange = this.displayNameChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.pictureUrlChange = this.pictureUrlChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    this.getUserInfo();
    this.getUsersGroups();
  }

  getUserInfo() {
    axios.get(`/api/users/id/${this.props.params.userId}`)
      .then((response) => {
        this.setState({
          id: response.data.id,
          displayName: response.data.displayName,
          email: response.data.email,
          description: response.data.description,
          pictureUrl: response.data.pictureUrl,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          showErrors: true,
          errorMessage: 'There was an error receiving your profile from the server',
        });
      });
  }

  getUsersGroups() {
    axios.get(`/api/group/user/${this.props.params.userId}`)
      .then((response) => {
        this.setState({ myGroups: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  pictureUrlChange(e) {
    this.setState({ pictureUrl: e.target.value });
  }

  displayNameChange(e) {
    this.setState({ displayName: e.target.value });
  }

  descriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  submitForm() {
    const url = '/api/users/save';
    const data = {
      id: this.state.id,
      displayName: this.state.displayName,
      email: this.state.email,
      description: this.state.description,
      pictureUrl: this.state.pictureUrl,
    };

    axios.post(url, data)
      .then((response) => {
        this.setState({
          showResults: true,
          showErrors: false,
        });
        this.context.router.push(`/user/${this.props.params.userId}`);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          showResults: false,
          showErrors: true,
          errorMessage: 'There was an error updating your profile',
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.showResults ? <Alert>Your profile has been updated!</Alert> : null}
        {this.state.showErrors ? <Error>{this.state.errorMessage}</Error> : null}
        <BSLabel text="Edit Profile" />
        <div className="row pull-down">
          <div className="col-xs-3">
            <Thumbnail pictureUrl={this.state.pictureUrl} altText="User" />
          </div>
          <div className="col-xs-9">
            <BasicInputField
              id={this.state.id}
              label="Display Name"
              onChange={this.displayNameChange}
              value={this.state.displayName}
            />
          </div>
        </div>
        <div className="row">
          <BasicInputField
            id="pictureUrl"
            label="Picture URL"
            onChange={this.pictureUrlChange}
            value={this.state.pictureUrl}
          />
        </div>
        <div className="row">
          <div>
            <TextBox
              id={this.state.id}
              label="Description"
              onChange={this.descriptionChange}
              value={this.state.description}
            />
          </div>
        </div>
        <div className="row bottom-padded">
          <div className="col-xs-4 col-xs-offset-5">
            <button type="button" className="btn btn-primary" onClick={this.submitForm}>Save</button>
            <button type="button" className="btn btn-default" onClick={browserHistory.goBack}>Cancel</button>
          </div>
        </div>
        <PageBreak />
        <BSLabel text="Edit Groups" />
        <DynamicGroupThumbnails groups={this.state.myGroups} />
      </div>
    );
  }
}
