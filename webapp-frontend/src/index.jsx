import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './containers/main-layout';
import App from './components/app';
import Home from './components/home';
import UserSetting from './containers/user-setting';

ReactDom.render(
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={App} />
      <Route path="/main" component={Home} />
      <Route path="/user/:userId" component={UserSetting} />
    </Route>
  </Router>,
  document.querySelector('.content')
);
