import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import Header from './header';

const MainLayout = React.createClass({
    render: function() {
        return (
            <MuiThemeProvider>
                <div id="header" className="clearfix">
                    <header></header>
                    <aside>
                        <Header />
                    </aside>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        )
    }
});

export default MainLayout;