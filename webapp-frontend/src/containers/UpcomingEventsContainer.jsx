import React from 'react';
import axios from 'axios';
import UpcomingEvent from '../components/events/UpcomingEvent';

export default class UpcomingEventsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentWillMount() {
    axios.get('/api/event/upcoming/current/user')
      .then((response) => {
        this.setState({ events: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2 className="center-text">Upcoming Events</h2>
        <hr />
        {this.state.events.map((event, index) =>
          <div key={index} className="sidebar-row">
            <UpcomingEvent
              key={index}
              eventDate={event.startDate}
              name={event.name}
              description={event.description}
              pictureUrl={event.group.groupPictureUrl}
              location={event.location}
            />
          </div>
        )}
      </div>
    );
  }
}
