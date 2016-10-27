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
          <div className="container">
            <div>
              {props.children}
            </div>
          </div>
        </div>
        <div className="col-xs-3">
          <div className="row">
            <SidebarTopRight />
          </div>
          <div className="row half-vertical">
            <SidebarBottomRight />
          </div>
        </div>
      </div>
    </div>
  );
}
