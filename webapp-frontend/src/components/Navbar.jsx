import React from 'react';
import { Link } from 'react-router';

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
        </div>
      </nav>
    </div>
  );
}
