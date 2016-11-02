import React, {Component} from 'react';
import auth from '../auth';
import {withRouter} from 'react-router';


const SignIn = withRouter(React.createClass({ //withRouter gives this component the router in props

  onSignIn: function(googleUser) {
    auth.login(googleUser, () => {
      if(auth.loggedIn()) {
        return this.props.router.replace('/main');
      }
      console.log("user successfully logged in.");
    });
  },

  componentDidMount: function() {
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
      'style' : '',
      'onsuccess': this.onSignIn,
    });
  },

    render: function() {

	return (
	    <div className="sign-in-page">
		<div className="sign-in-container">
		    <h1 >Advent</h1>
		    <div className="sign-in-button" id="signin2"></div>
		</div>
	    </div>
	);
    }
}));

export default SignIn;
