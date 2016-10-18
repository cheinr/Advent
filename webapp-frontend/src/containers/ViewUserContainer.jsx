import React from 'react';
import axios from 'axios';

export default class ViewUserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      description: '',
      pictureUrl: '',
    };
  }

  componentWillMount() {
    const url = `/api/users/id/${this.props.params.userId}`;
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
            <a href={this.state.pictureUrl} className="thumbnail">
              <img src={this.state.pictureUrl} alt="User" />
            </a>
          </div>
          <div className="col-xs-9">
            <div className="page-header">
              <h1>{this.state.displayName}</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Description</h3>
            </div>
            <div className="panel-body">
              {/* TODO dszopa 10/18/16 - Add markdown support for the description */}
              {this.state.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
