import React from 'react';
import { Link } from 'react-router';
import NavDropdown from './NavDropdown';
import SignOut from '../../sign-out';

export default function NavPreferences(props) {
  return (
    <NavDropdown>
      <a className="dropdown-toggle glyphicon glyphicon glyphicon-lock" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" aria-hidden="true" />
      <ul className="dropdown-menu">
        <li><Link to={`/user/${localStorage.id}`}>My Profile</Link></li>
        <li><SignOut /></li>
      </ul>
    </NavDropdown>
  );
}
