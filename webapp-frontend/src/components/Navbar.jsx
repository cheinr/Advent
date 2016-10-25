import React from 'react';
import { Link } from 'react-router';
import SignOut from './sign-out';

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Advent</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/main">Main</Link></li>
          </ul>
          <ul className="nav navbar-nav">
            <li><SignOut /></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">My Profile</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="glyphicon glyphicon-bell" /> <span className="badge"> 0 </span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider" />
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
