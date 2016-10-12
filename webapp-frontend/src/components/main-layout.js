import React from 'react';

import Header from './header';

const MainLayout = React.createClass({
    render: function() {
        return (
            <div id="header" className="clearfix container-fluid">
                <header></header>
                <aside>
                    <Header />
                </aside>
                <main>
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </main>
            </div>
        )
    }
});

export default MainLayout;