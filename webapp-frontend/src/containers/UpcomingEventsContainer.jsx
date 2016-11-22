import React from 'react';
import axios from 'axios';
import UpcomingEvent from '../components/events/UpcomingEvent';

const date = new Date();

const sampleEvents = {
  id: 1,
  eventDate: `${date.toLocaleDateString()} at ${date.toLocaleTimeString().substring(0, 5)} ${date.toLocaleTimeString().substring(9, 11)}`,
  name: 'Super Awesome Kickoff Event!',
  description: 'This event will be from 1-5',
  pictureUrl: 'https://apod.nasa.gov/apod/image/1509/TexasEclipse_Westlake_2642.jpg',
};

export default class UpcomingEventsContainer extends React.Component {
  constructor(props) {
    super(props);
    // TODO dszopa 11/21/16- temporary hardcoded data that will be removed in issue that implements get upcoming events for user
    this.state = {
      // events: [],
      events: [sampleEvents, sampleEvents, sampleEvents, sampleEvents, sampleEvents],
    };
    // this.getEventsForUser = this.getEventsForUser.bind(this);
  }

  componentWillMount() {
    // TODO dszopa 11/21/16 - implemented in get upcoming events for user...
  }

  render() {
    return (
      <div>
        <h2 className="center-text">Upcoming Events</h2>
        <hr />
        {this.state.events.map((event, id) =>
          <div className="sidebar-row">
            <UpcomingEvent key={id} eventDate={event.eventDate} name={event.name} description={event.description} pictureUrl={event.pictureUrl} />
          </div>
        )}
      </div>
    );
  }
}
