import React from 'react';
import { Link } from 'react-router';
import SignOut from '../../sign-out';
import NavbarRight from './NavbarRight';
import NavbarHeader from './NavbarHeader';
import NavbarNav from './NavbarNav';
import NavbarNotification from './NavbarNotification';

const testNotifications = [
  { id: 1, message: 'sampleMessage', link: 'https://google.com', notificationType: 'MESSAGE' },
];

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <NavbarHeader>
            <Link className="navbar-brand" to="/">Advent</Link>
          </NavbarHeader>
          <NavbarNav>
            {/* TODO dszopa 10/25/16 - Figure how to wrap all children in <li> */}
            <li><Link to="/main">Main</Link></li>
            <li><SignOut /></li>
          </NavbarNav>
          <ul className="nav navbar-nav">
            <li><SignOut /></li>
          </ul>
          <NavbarRight>
            <li><a href="#">My Profile</a></li>
            <NavbarNotification link="#" notifications={testNotifications} />
          </NavbarRight>
        </div>
      </nav>
    </div>
  );
}
