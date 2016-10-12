import React from 'react';
import { Link } from 'react-router';

import auth from '../auth';

import SignOut from './sign-out';


const Header = React.createClass({
    render: function() {
        return (
            <div id="header" className="clearfix">
                <nav className="navbar navbar-inverse navbar-fixed-top">
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
        )
    }
});

export default Header;