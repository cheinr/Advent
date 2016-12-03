import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import DynamicGroupPictureThumbnails from '../components/display/groups/DynamicGroupPictureThumbnails';
import Panel from '../components/display/Panel';
import Thumbnail from '../components/display/Thumbnail';
import PageHeader from '../components/display/PageHeader';
import Error from '../components/feedback/Error';

export default class ViewUserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myGroups: [],
      displayName: '',
      description: '',
      pictureUrl: '',
    };
  }

  componentWillMount() {
    this.getUserInfo(this.props.params.userId);
    this.getUserGroups(this.props.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.userId !== this.props.params.userId) {
      this.getUserInfo(nextProps.params.userId);
      this.getUserGroups(this.props.params.userId);
    }
  }

  getUserGroups(userId) {
    const url = `/api/group/user/${userId}`;
    axios.get(url)
      .then((response) => {
        this.setState({ myGroups: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getUserInfo(userId) {
    const url = `/api/users/id/${userId}`;
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
        <DynamicGroupPictureThumbnails groups={this.state.myGroups} />
        <div className="row bottom-padded">
          <div className="col-xs-1">
            <Link to={`/user/edit/${this.props.params.userId}`}>
              <button type="button" className="btn btn-default">
                Edit</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
