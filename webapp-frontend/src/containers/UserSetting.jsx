import React from 'react';
import axios from 'axios';

import TextBox from '../components/TextBox';
import EntryField from '../components/EntryField';

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
          displayName: response.data.displayName,
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
              {/* TODO - The users picture will come from their google account */}
              <img src="http://xacatolicos.com/app/images/avatar/icon-user.png" alt="..." />
            </a>
          </div>
          <div className="col-xs-9">
            <EntryField fieldName="Display Name" placeholder={this.state.displayName} />
          </div>
        </div>
        <div>
          <TextBox fieldName="Description" placeholder={this.state.description} />
        </div>
        <div>
          {/* TODO Save button */}
          {/* Should get action for it passed down into it (on click) */}
        </div>
      </div>
    );
  }
}
