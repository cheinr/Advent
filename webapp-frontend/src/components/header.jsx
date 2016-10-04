import React from 'react';
import { Link } from 'react-router';

export default function Header(props) {
  return (
    <div id="header" className="clearfix">
      <ul className="headerBar">
        <li className="headerLink"><Link to="/">Advent</Link></li>
        <li className="headerLink"><Link to="/main">Main</Link></li>
      </ul>
    </div>
  );
}
