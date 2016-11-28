import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';
import Panel from '../components/display/Panel';
import Thumbnail from '../components/display/Thumbnail';
import PageHeader from '../components/display/PageHeader';
import Error from '../components/feedback/Error';

export default class MyProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      description: '',
      pictureUrl: '',
    };
  }

  componentWillMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    const url = '/api/users/my-profile';
    axios.get(url)
      .then((response) => {
        this.setState({
          displayName: response.data.displayName,
          description: response.data.description,
          pictureUrl: response.data.pictureUrl,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          showErrors: true,
          errorMessage: 'There was an error receiving the user from the server',
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.showErrors ? <Error>{this.state.errorMessage}</Error> : null}
        <div className="row pull-down">
          <div className="col-xs-3">
            <Thumbnail pictureUrl={this.state.pictureUrl} altText="User" />
          </div>
          <div className="col-xs-9">
            <PageHeader title={this.state.displayName} />
          </div>
        </div>
        <div className="row">
          <Panel title="Description">
            <ReactMarkdown escapeHtml source={this.state.description} />
          </Panel>
        </div>
        <Link to={'/user/edit/current/profile'}>
          <button type="button" className="btn btn-default">
            Edit</button>
        </Link>
        {/* TODO dszopa 10/18/16 - Display groups too */}
      </div>
    );
  }
}
