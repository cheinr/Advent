import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory, withRouter } from 'react-router';
import axios from 'axios';

import MainLayout from './components/MainLayout';
import HomeContainer from './containers/HomeContainer';
import UserSettingContainer from './containers/UserSettingContainer';
import ViewUserContainer from './containers/ViewUserContainer';
import EventCreateContainer from './containers/EventCreateContainer';
import EventListContainer from './containers/EventListContainer';
import EventInfoContainer from './containers/EventInfoContainer';
import ScheduleAddEvent from './components/schedule-add-event';
import GroupCreateContainer from './containers/GroupCreateContainer';
import GroupInfoContainer from './containers/GroupInfoContainer';
import GroupChatContainer from './containers/GroupChatContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import MyGroupsContainer from './containers/MyGroupsContainer';
import SignIn from './components/sign-in';
import auth from './auth';
import EventCalendarContainer from './containers/EventCalendarContainer';
import GroupEditContainer from './containers/GroupEditContainer';


function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  } else {
    axios.defaults.headers.common["Authorization"] = auth.getToken();

    //If Server sends back Unauthorized error code, sign out the user.
    axios.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if(error.response.status === 403) {
        console.log("user's id token is invalid");
        var auth2 = gapi.auth2.getAuthInstance();
        auth.logout(auth2, function() {
          window.location.replace("");
        });
      }
      return error;
    }.bind(this));
  }
}

// this onEnter function is used to prevent logged in users from visiting
// the login route.npm
function requireNoAuth(nextState, replace) {
  if (auth.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}


ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/login" component={SignIn} onEnter={requireNoAuth} />
    <Route component={MainLayout} onEnter={requireAuth}>
      <Route path="/" component={HomeContainer} />
      <Route path="/my-groups" component={MyGroupsContainer} />
      <Route path="/user/:userId" component={ViewUserContainer} />
      <Route path="/user/edit/:userId" component={UserSettingContainer} />
      <Route path="/schedule/addevent" component={ScheduleAddEvent} />
      <Route path="/event/create/:groupId" component={EventCreateContainer} />
      <Route path="/event/list" component={EventListContainer} />
      <Route path="/group/calendar/:groupId" component={EventCalendarContainer} />
      <Route path="/event/:eventId" component={EventInfoContainer} />
      <Route path="/group/create" component={GroupCreateContainer} />
      <Route path="/group/:groupId" component={GroupInfoContainer} />
      <Route path="/chat/group/:groupId" component={GroupChatContainer} />
      <Route path="/search(/:query)" component={SearchResultsContainer} />
      <Route path="/group/edit/:groupId" component={GroupEditContainer} />
    </Route>
  </Router>
  , document.querySelector('.content'));
