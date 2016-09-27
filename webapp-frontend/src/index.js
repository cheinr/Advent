import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import MainLayout from './components/main-layout';
import App from './components/app';

ReactDom.render(
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={App}/>
            <Route/>
        </Route>
    </Router>
, document.querySelector('.container'));