import React, {Component} from 'react';
import auth from '../auth';
import {withRouter} from 'react-router';


const SignOut = withRouter(React.createClass({ //withRouter gives this component the router in props
  componentDidMount: function() {
    window.addEventListener('google-loaded',this.onGoogleLoad);
  },

  onGoogleLoad : function() {
    gapi.load('auth2', function() {
        gapi.auth2.init();
    });
  },

  signOut : function() {
    var auth2 = gapi.auth2.getAuthInstance();



    auth.logout(auth2, () => {
      this.props.router.replace('/login');
    });

  },

  render: function() {
    return (
      <a href="#" onClick={this.signOut}>Sign out</a>
    )
  }
}));

export default SignOut;
