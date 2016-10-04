import React from 'react';

import Header from './header';

export default function MainLayout(props) {
  return (
    <div id="header" className="clearfix">
      <aside>
        <Header />
      </aside>
      <main>
        {props.children}
      </main>
    </div>
  );
}
