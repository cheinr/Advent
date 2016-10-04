import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/main-layout';
import App from './components/app';
import Home from './components/home';

ReactDom.render(
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={App} />
      <Route path="/main" component={Home} />
    </Route>
  </Router>,
  document.querySelector('.container')
);
