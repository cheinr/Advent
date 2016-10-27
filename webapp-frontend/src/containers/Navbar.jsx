import React from 'react';
import { Link } from 'react-router';
import SignOut from '../components/sign-out';
import NavRight from '../components/display/navbar/NavRight';
import NavHeader from '../components/display/navbar/NavHeader';
import NavNav from '../components/display/navbar/NavNav';import NavDropdownContainer from '../components/display/navbar/NavDropdownContainer';
import NavNotificationPanel from '../components/display/navbar/notification/NavNotificationPanel';
import NavNotifications from '../components/display/navbar/notification/NavNotifications';
import NavNotificationDropdown from '../components/display/navbar/notification/NavNotificationDropdown';
import NavCollapsible from '../components/display/navbar/NavCollapsible';
import NavNotificationFooter from '../components/display/navbar/notification/NavNotificationFooter';
import DropdownToolbar from '../components/display/DropdownToolbar';
import NavLink from '../components/display/navbar/NavLink';

const testNotifications = [
  { id: 1,
    header: 'New message from User',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://google.com',
    notificationType: 'MESSAGE',
  },
  { id: 2,
    header: 'new message from User',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://google.com',
    notificationType: 'MESSAGE',
  },
  { id: 3,
    header: 'new message from User',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://google.com',
    notificationType: 'MESSAGE',
  },
  { id: 4,
    header: 'new message from User',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://google.com',
    notificationType: 'MESSAGE',
  },
  { id: 5,
    header: 'new message from User',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://google.com',
    notificationType: 'MESSAGE',
  },
];

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.viewAll = this.viewAll.bind(this);
    this.markAllAsRead = this.markAllAsRead.bind(this);
  }

  // TOOD dszopa 10/27/16 - Implement these
  viewAll() {
    // Axios request to get all notifications, then manipulate state with the notifications
  }

  markAllAsRead() {
    // Axios post to mark all as read, then manipulate state
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
                <NavLink link="/main" name="Main" />
                <li><SignOut /></li>
              </NavNav>
              <NavRight>
                <NavLink link="/users/1" name="My Profile" />
                <NavNav>
                  <NavNotificationDropdown>
                    <NavNotificationPanel numNotifications={testNotifications.length} />
                    <NavDropdownContainer className="dropdown-position-bottomright">
                      <DropdownToolbar onClick={this.markAllAsRead} numNotifications={testNotifications.length} />
                      <NavNotifications notifications={testNotifications} />
                      <NavNotificationFooter onClick={this.viewAll} />
                    </NavDropdownContainer>
                  </NavNotificationDropdown>
                </NavNav>
              </NavRight>
            </NavCollapsible>
          </div>
        </nav>
      </div>
    );
  }
}
