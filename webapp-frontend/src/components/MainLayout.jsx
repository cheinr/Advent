import React from 'react';
import axios from 'axios';
import Navbar from '../containers/Navbar';
import UpcomingEventsContainer from '../containers/UpcomingEventsContainer';

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    axios.get('/api/users/current').then((resp) => {
      this.setState({ user: resp.data });
      console.log(resp);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    // this gives children access to user property
    const children = React.cloneElement(this.props.children,
      { user: this.state.user });

    return (
      <div className="padded-top">
        <Navbar />
        <div className="container-fluid">
          <div className="col-xs-9">
            <div>
              {children}
            </div>
          </div>
          <div className="sidebar sidebar-well">
            <UpcomingEventsContainer />
          </div>
        </div>
      </div>
    );
  }
}
