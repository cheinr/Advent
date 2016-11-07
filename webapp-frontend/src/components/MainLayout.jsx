import React from 'react';

import Navbar from '../containers/Navbar';
import SidebarTopRight from './SidebarTopRight';
import SidebarBottomRight from './SidebarBottomRight';
import axios from 'axios';

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    axios.get("/api/users/current").then( (resp) => {
      this.setState({user: resp.data});
      console.log(resp);
    }).catch( function(error) {
      console.log(error);
    });
  }
  render() {
    //this gives children access to user property
    const children = React.cloneElement(this.props.children,
      {user: this.state.user});

    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="col-xs-9">
            <div>
              {children}
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
}
