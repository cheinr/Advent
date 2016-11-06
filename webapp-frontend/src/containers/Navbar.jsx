import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import NavRight from '../components/display/navbar/NavRight';
import NavHeader from '../components/display/navbar/NavHeader';
import NavNav from '../components/display/navbar/NavNav';
import NavDropdownContainer from '../components/display/navbar/NavDropdownContainer';
import NavNotificationPanel from '../components/display/navbar/notification/NavNotificationPanel';
import NavNotifications from '../components/display/navbar/notification/NavNotifications';
import NavNotificationDropdown from '../components/display/navbar/notification/NavNotificationDropdown';
import NavCollapsible from '../components/display/navbar/NavCollapsible';
import NavNotificationFooter from '../components/display/navbar/notification/NavNotificationFooter';
import DropdownToolbar from '../components/display/DropdownToolbar';
import NavPreferences from '../components/display/navbar/NavPreferences';
import NavLink from '../components/display/navbar/NavLink';

// TODO dszopa 11/5/16 - Rename to NavbarContainer
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
    this.viewAll = this.viewAll.bind(this);
    this.markAllAsRead = this.markAllAsRead.bind(this);
    this.getNotifications = this.getNotifications.bind(this);
  }

  componentWillMount() {
    this.getNotifications();
  }

  getNotifications() {
    const url = `/api/notification/unread/user-id/${localStorage.id}`;
    const headers = { Authorization: localStorage.token };
    console.log(headers);
    console.log(url);

    axios({ method: 'get', headers, url })
      .then((response) => {
        console.log(response.data);
        this.setState({ notifications: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  viewAll() {
    // Axios request to get all notifications, then manipulate state with the notifications
    const url = `/api/notification/all/user-id/${localStorage.id}`;
    const headers = { Authorization: localStorage.token };

    axios({ method: 'get', headers, url })
      .then((response) => {
        this.setState({ notifications: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  markAllAsRead() {
    // Axios post to mark all as read, then manipulate state
    const url = `/api/notification/mark-read/all/${localStorage.id}`;
    const headers = { Authorization: localStorage.token };

    axios({ method: 'post', headers, url })
      .then((response) => {
        this.getNotifications();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container-fluid">
            <NavHeader>
              <Link className="navbar-brand" to="/">Advent</Link>
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </NavHeader>
            {/* TODO dszopa 10/25/16 - Fix the fact that stuff is not getting displayed properly by the collapsible */}
            <NavCollapsible>
              <NavNav>
                {/*TODO dszopa 11/5/16 - Figure out what links we want in the navbar if any, this is an example*/}
                <NavLink link="/schedule/addevent" name="Create Event" />
              </NavNav>
              <NavRight>
                <NavNav>
                  <NavNotificationDropdown>
                    <NavNotificationPanel numNotifications={this.state.notifications.length} />
                    <NavDropdownContainer className="dropdown-position-bottomright">
                      <DropdownToolbar clickEvent={this.markAllAsRead} numNotifications={this.state.notifications.length} />
                      <NavNotifications notifications={this.state.notifications} />
                      <NavNotificationFooter clickEvent={this.viewAll} />
                    </NavDropdownContainer>
                  </NavNotificationDropdown>
                </NavNav>
                <NavPreferences />
              </NavRight>
            </NavCollapsible>
          </div>
        </nav>
      </div>
    );
  }
}
