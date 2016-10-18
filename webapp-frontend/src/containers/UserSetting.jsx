import React from 'react';
import { Link, browserHistory } from 'react-router';
import axios from 'axios';
import TextBox from '../components/input/TextBox';
import BasicInputField from '../components/input/BasicInputField';

export default class UserSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      displayName: '',
      email: '',
      description: '',
      pictureUrl: 'http://xacatolicos.com/app/images/avatar/icon-user.png',
    };
    this.displayNameChange = this.displayNameChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentWillMount() {
    axios.get(`/api/users/id/${this.props.params.userId}`)
      .then((response) => {
        console.log(`response data: ${response.data}`);
        this.setState({
          displayName: response.data.displayName,
          description: response.data.description,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  displayNameChange(e) {
    this.setState({ displayName: e.target.value });
  }

  descriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  submitForm() {
    const url = '/api/users/create';
    const data = {
      id: this.state.id,
      displayName: this.state.name,
      email: this.state.email,
      description: this.state.description,
      pictureUrl: this.state.pictureUrl,
    };

    axios.post(url, data)
      .then((response) => {
        console.log(response.data);
        browserHistory.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  goBack() {
    browserHistory.goBack();
  }

  render() {
    return (
      <div>
        <div className="row pull-down">
          <div className="col-xs-3">
            {/* Ideally you click this and a modal to pick a url for your picture comes up */}
            <Link to="/user/:userId" className="thumbnail">
              <img src={this.state.pictureUrl} alt="Account" />
            </Link>
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
          <div>
            <TextBox
              id={this.state.id}
              label="Description"
              onChange={this.descriptionChange}
              value={this.state.description}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 col-xs-offset-5">
            <button type="button" className="btn btn-primary" onClick={this.submitForm}>Save</button>
            <button type="button" className="btn btn-default" onClick={this.goBack}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
