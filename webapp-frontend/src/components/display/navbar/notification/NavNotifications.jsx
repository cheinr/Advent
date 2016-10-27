import React from 'react';

export default function NavbarNotifications(props) {
  // TODO - dszopa 10/27/16 - further breakdown notifications into components
  return (
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
  );
}
