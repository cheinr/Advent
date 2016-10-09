import React from 'react';
import axios from 'axios';

import TextBox from '../components/text-box';
import EntryField from '../components/entry-field';

export default class UserSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      description: '',
    };
  }
  componentWillMount() {
    axios.get(`/api/users/id/${this.props.params.userId}`)
      .then((response) => {
        console.log(`response data: ${response.data}`);
        this.setState({
          username: response.data.username,
          description: response.data.description,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div className="row pull-down">
          <div className="col-xs-3">
            <a href="#" className="thumbnail no-margin-bottom">
              {/* A simple placeholder until we host our own */}
              {/* TODO - The users picture will come from their google account */}
              <img src="http://xacatolicos.com/app/images/avatar/icon-user.png" alt="..." />
            </a>
          </div>
          <div className="col-xs-6">
            <EntryField fieldName="Display Name" placeholder={this.state.username} />
          </div>
        </div>
        <div>
          <TextBox fieldName="Description" placeholder={this.state.description} />
        </div>
        <div>
          {/* TODO Save button */}
        </div>
      </div>
    );
  }
}
