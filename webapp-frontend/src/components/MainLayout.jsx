import React from 'react';

import Navbar from '../components/Navbar';
import SidebarTopRight from './SidebarTopRight';
import SidebarBottomRight from './SidebarBottomRight';

export default function MainLayout(props) {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="col-xs-9">
          <div>
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
    </div>
  );
}
