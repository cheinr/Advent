import React, {Component} from 'react';
import auth from '../auth';
import {withRouter} from 'react-router';


const SignIn = withRouter(React.createClass({ //withRouter gives this component the router in props
  onSignIn: function(googleUser) {
    console.log("user successfully logged in.");

    auth.login(googleUser, () => {
      if(auth.loggedIn) {
        return this.props.router.replace('/main');
      }
    });
  },

  componentDidMount: function() {
      window.addEventListener('google-loaded',this.renderGoogleLoginButton);
      //As we can see it is possible for us to try and render the button twice.
      //If this happens we will end up failing on the first render, as gapi
      //will be undefined. TODO
      this.renderGoogleLoginButton();
    },

  renderGoogleLoginButton: function() {
    console.log('rendering google signin button')
    gapi.signin2.render('signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 200,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSignIn
    })
  },

  render: function() {
    return (
      <div>
      <div id="signin2"></div>
      </div>
    );
  }


}));

export default SignIn;
