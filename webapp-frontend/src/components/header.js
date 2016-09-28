import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
    render: function() {
        return (
            <div id="header" className="clearfix">
                <ul className="headerBar">
                    <li className="headerLink"><Link to="/">Advent</Link></li>
                    <li className="headerLink"><Link to="/main">Main</Link></li>
                </ul>
            </div>
        )
    }
});

export default Header;