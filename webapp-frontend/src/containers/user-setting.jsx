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
    // axios.get('/api/users/id/1')
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
        <div className="row">
          <div className="col-xs-3">
            <a href="#" className="thumbnail">
              {/* A simple placeholder until we host our own */}
              <img src="http://xacatolicos.com/app/images/avatar/icon-user.png" alt="..." />
            </a>
          </div>
        </div>
        <EntryField fieldName="Display Name" placeholder={this.state.username} />
        <div>
          <TextBox fieldName="Description" placeholder={this.state.description} />
        </div>
      </div>
    );
  }
}
