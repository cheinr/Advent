import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import MainLayout from './components/MainLayout';
import App from './components/App';
import Home from './components/Home';
import UserSettingContainer from './containers/UserSettingContainer';
import ViewUserContainer from './containers/ViewUserContainer';
import EventCreateContainer from './containers/EventCreateContainer';
import EventListContainer from './containers/EventListContainer';
import ScheduleAddEvent from './components/schedule-add-event';
import SignIn from './components/sign-in';
import auth from './auth';
import axios from 'axios';

//Send auth token with each request
axios.defaults.headers.common["Authorization"] = auth.getToken();
//If Server sends back Unauthorized error code, sign out the user.
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if(error.response.status === 401) {
	auth.logout();
	replace({
	    pathname: '/login',
	    state: { nextPathname: nextState.location.pathname },
	});
    }
});


function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

// this onEnter function is used to prevent logged in users from visiting
// the login route.
function requireNoAuth(nextState, replace) {
  if (auth.loggedIn()) {
    replace({
      pathname: '/main',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}


ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/login" component={SignIn} onEnter={requireNoAuth} />
    <Route component={MainLayout} onEnter={requireAuth}>
      <Route path="/" component={App} />
      <Route path="/main" component={Home} />
      <Route path="/user/:userId" component={ViewUserContainer} />
      <Route path="/user/edit/:userId" component={UserSettingContainer} />
      <Route path="/schedule/addevent" component={ScheduleAddEvent} />
      <Route path="/event/create" component={EventCreateContainer} />
      <Route path="/event/list" component={EventListContainer} />
    </Route>
  </Router>
, document.querySelector('.content'));
