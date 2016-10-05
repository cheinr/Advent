import React from 'react';

import NavBar from '../components/navbar';
import SidebarTopRight from './sidebar-top-right';
import SidebarBottomRight from './sidebar-bottom-right';

export default function MainLayout(props) {
  return (
    <div>
      <NavBar />
      <div className="col-xs-9">
        <div className="container">
          <div>
              {props.children}
          </div>
        </div>
      </div>
      <div className="col-xs-3">
        <SidebarTopRight />
        <SidebarBottomRight />
      </div>
    </div>
  );
}
