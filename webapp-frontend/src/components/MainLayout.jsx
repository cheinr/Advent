import React from 'react';

import Navbar from '../containers/Navbar';
import SidebarTopRight from './SidebarTopRight';
import SidebarBottomRight from './SidebarBottomRight';

export default function MainLayout(props) {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="col-xs-9">
          <div>
            {props.children}
          </div>
        </div>
        {/* <div className="col-xs-3 sidebar" > */}
        <div className="sidebar">
          <div className="row">
            <SidebarTopRight />
          </div>
          {/* <div className="row half-vertical"> */}
          <div className="row">
            <SidebarBottomRight />
          </div>
        </div>
      </div>
    </div>
  );
}
