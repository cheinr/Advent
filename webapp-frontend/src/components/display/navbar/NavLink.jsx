import React from 'react';
import { Link } from 'react-router';

export default function NavbarLink(props) {
  return (
    <li>
      <Link to={props.link}>{props.name}</Link>
    </li>
  );
}