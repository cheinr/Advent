import React, {Component} from 'react';
import { withRouter } from 'react-router';
import auth from '../auth';

class SignOut extends React.Component {

  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    gapi.load('auth2', () => {
      gapi.auth2.init();
    });
  }

  signOut() {
    const auth2 = gapi.auth2.getAuthInstance();

    auth.logout(auth2, () => {
      this.props.router.replace('/login');
    });
  }

  render() {
    return (
      <a onClick={this.signOut}>Sign Out</a>
    );
  }
}

export default withRouter(SignOut);

