import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './containers/MainLayout';
import App from './components/App';
import Home from './components/Home';
import UserSetting from './containers/UserSetting';

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
