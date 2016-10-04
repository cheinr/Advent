import React from 'react';
import { Link } from 'react-router';

import auth from '../auth';

import SignOut from './sign-out';


const Header = React.createClass({
  render: function() {
    return (
      <div id="header" className="clearfix">
      <ul className="headerBar">
      <li className="headerLink"><Link to="/">Advent</Link></li>
      <li className="headerLink"><Link to="/main">Main</Link></li>
      <li className="headerLink"><Link to="/calendar">Calendar</Link></li>
      <li className="headerLink">
        <SignOut/>
      </li>
      </ul>
      </div>
    )
  }
});

export default Header;
