import React from 'react';
import axios from 'axios';
import Panel from '../components/display/Panel';
import Thumbnail from '../components/display/Thumbnail';
import PageHeader from '../components/display/PageHeader';

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
            <Thumbnail pictureUrl={this.state.pictureUrl} altText="User" />
          </div>
          <div className="col-xs-9">
            <PageHeader title={this.state.displayName} />
          </div>
        </div>
        <div className="row">
          {/* TODO dszopa 10/18/16 - Add Markdown support for description */}
          <Panel title="Description">{this.state.description}</Panel>
        </div>
      </div>
    );
  }
}
