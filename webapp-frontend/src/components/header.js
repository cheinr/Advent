import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
    render: function() {
        return (
            <div id="header" className="clearfix">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">Advent</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                            <li><Link to="/main">Main</Link></li>
                            <li><Link to="/event/create">Create Event</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
});

export default Header;