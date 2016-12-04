import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { Link } from 'react-router';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export default class EventCalendar extends Component {
  render() {
    return (
      <div>
        <Link to={`/group/${this.props.groupId}`}>Back to Group</Link>
        <div>
          <BigCalendar
            events={this.props.events}
            timeslots={2}
            defaultDate={new Date()}
            defaultView="agenda"
            components={{
              event: this.props.Event,
              agenda: {
                event: this.props.EventAgenda,
              },
            }}
          />
        </div>
      </div>
    );
  }
}