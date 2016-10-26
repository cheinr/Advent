import React from 'react';
import { Link } from 'react-router';
import SignOut from '../../sign-out';
import NavbarRight from './NavbarRight';
import NavbarHeader from './NavbarHeader';
import NavbarNav from './NavbarNav';
import NavbarNotification from './NavbarNotification';
import NavbarCollapsible from './NavbarCollapsible';

const testNotifications = [
  { id: 1,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://google.com',
    notificationType: 'MESSAGE',
  },
  { id: 2,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://google.com',
    notificationType: 'MESSAGE',
  },
];

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <NavbarHeader>
            <Link className="navbar-brand" to="/">Advent</Link>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </NavbarHeader>
          {/* TODO dszopa 10/25/16 - Fix the fact that stuff is not getting displayed properly by the collapsible */}
          <NavbarCollapsible>
            <NavbarNav>
              {/* TODO dszopa 10/25/16 - Figure how to wrap all children in <li> */}
              <li><Link to="/main">Main</Link></li>
              <li><SignOut /></li>
            </NavbarNav>
            <NavbarRight>
              {/* TODO dszopa 10/25/16 - Break this down into smaller components */}
              <li><a href="#">My Profile</a></li>
              <NavbarNav>
                <li className="dropdown dropdown-notifications">
                  <a href="#notifications-panel" className="dropdown-toggle" data-toggle="dropdown">
                    <i data-count="2" className="glyphicon glyphicon-bell notification-icon" />
                  </a>
                  <div className="dropdown-container dropdown-position-bottomright">
                    <div className="dropdown-toolbar">
                      <div className="dropdown-toolbar-actions">
                        <a href="#">Mark all as read</a>
                      </div>
                      <h3 className="dropdown-toolbar-title">Notifications (2)</h3>
                    </div>
                    <ul className="dropdown-menu notifications">
                      <li className="notification">
                        <div className="media">
                          <div className="media-left">
                            <div className="media-object">
                              <img src="http://www.trashedgraphics.com/images/default_icon.png" height="50" width="50" className="img-rounded" alt="Name" />
                            </div>
                          </div>
                          <div className="media-body">
                            <strong className="notification-title"><a href="#">Dave Lister</a> commented on <a href="#">DWARF-13 - Maintenance</a></strong>
                            <p className="notification-desc">I totally don't wanna do it. Rimmer can do it.</p>

                            <div className="notification-meta">
                              <small className="timestamp">27. 11. 2015, 15:00</small>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="notification">
                        <div className="media">
                          <div className="media-left">
                            <div className="media-object">
                              <img src="https://cdn3.iconfinder.com/data/icons/UltimateGnome/256x256/emblems/emblem-generic.png" height="50" width="50" className="img-rounded" alt="Name" />
                            </div>
                          </div>
                          <div className="media-body">
                            <strong className="notification-title"><a href="#">Nikola Tesla</a> resolved <a href="#">T-14 - Awesome stuff</a></strong>

                            <p className="notification-desc">Resolution: Fixed, Work log: 4h</p>

                            <div className="notification-meta">
                              <small className="timestamp">27. 10. 2015, 08:00</small>
                            </div>

                          </div>
                        </div>
                      </li>

                      <li className="notification">
                        <div className="media">
                          <div className="media-left">
                            <div className="media-object">
                              <img src="http://icons.iconarchive.com/icons/sora-meliae/matrilineare/1024/Mimes-image-x-generic-icon.png" height="50" width="50" className="img-rounded" alt="Name" />
                            </div>
                          </div>
                          <div className="media-body">
                            <strong className="notification-title"><a href="#">James Bond</a> resolved <a href="#">B-007 - Desolve Spectre organization</a></strong>

                            <div className="notification-meta">
                              <small className="timestamp">1. 9. 2015, 08:00</small>
                            </div>

                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="dropdown-footer text-center">
                      <a href="#">View All</a>
                    </div>
                  </div>
                </li>
              </NavbarNav>
            </NavbarRight>
          </NavbarCollapsible>
        </div>
      </nav>
    </div>
  );
}
