import React, {Component} from 'react';
import auth from '../auth';
import {withRouter} from 'react-router';

const SignIn = withRouter(React.createClass({ //withRouter gives this component the router in props
  onSignIn: function() {
    var cb = function() {
      if(auth.loggedIn) {
        this.props.router.replace('/');
      }
    }
  },

  render: function() {
    return (
      <div>
        <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
      </div>

    );
  }


}));

export default SignIn;
