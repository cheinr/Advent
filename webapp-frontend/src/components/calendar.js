import React, {Component} from 'react';
import auth from '../auth';
import {withRouter} from 'react-router';


const Calendar = React.createClass({
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
      <div>
      <h1>This is our Calendar.</h1>
      </div>
    )
  }
});

export default Calendar;
