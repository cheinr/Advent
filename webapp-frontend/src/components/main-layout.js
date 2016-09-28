import React from 'react';

import Header from './header';

const MainLayout = React.createClass({
    render: function() {
        return (
            <div id="header" className="clearfix">
                <header></header>
                <aside>
                    <Header />
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
});

export default MainLayout;