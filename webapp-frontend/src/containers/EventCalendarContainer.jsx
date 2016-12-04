import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router';
import EventCalendar from '../components/EventCalendar';
import Alert from '../components/feedback/Alert'

export default class EventCalendarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      showAddedEvent: false,
      eventAddMessage: '',
      eventAddLink: '',
    };
    this.exportToGCal = this.exportToGCal.bind(this);
    this.event = this.event.bind(this);
    this.eventAgenda = this.eventAgenda.bind(this);
  }

  componentWillMount() {
    const url = `/api/event/group/${this.props.params.groupId}`;

    axios.post(url)
      .then((response) => {
        const eventArr = [];

        response.data.map(function(event) {
          eventArr.push({
            id: event.id,
            title: event.name,
            desc: event.description,
            start: moment(event.startDate, 'MM/DD/YYYY HH:mm TT').toDate(),
            end: moment(event.endDate, 'MM/DD/YYYY HH:mm TT').toDate(),
            location: event.location,
          });
        });
        this.setState({ events: eventArr });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  exportToGCal(event) {
    gapi.client.load('calendar', 'v3', () => {
      /* eslint-disable */
      const gCalEvent = {
        'summary': event.title,
        'location': event.location,
        'description': event.desc,
        'start': {
          'dateTime': event.start.toISOString(),
          'timeZone': 'America/Chicago'
        },
        'end': {
          'dateTime': event.end.toISOString(),
          'timeZone': 'America/Chicago'
        },
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 10}
          ]
        }
      };
      /* eslint-enable */

      const request = gapi.client.calendar.events.insert({
        calendarId: 'primary',
        resource: gCalEvent,
      });

      request.execute((googleEvent) => {
        this.setState({
          showAddedEvent: true,
          eventAddMessage: `${event.title} has been added to your google calendar!`,
          eventAddLink: googleEvent.htmlLink,
        });
      });
    });
  }

  event(event) {
    return (
      <span>
        <strong>
          {event.title}
        </strong>
        {event.desc && (':  ' + event.desc)}
      </span>
    );
  }

  eventAgenda(event) {
    return (
      <span>
        <em>{event.title}</em>
        <p>{ event.desc }</p>
        <div className="btn-group">
          <Link className="btn btn-default" to={`/event/${event.id}`}>View Event</Link>
          <a className="btn btn-default" onClick={() => this.exportToGCal(event)}>Export to Google Calendar</a>
        </div>
      </span>
    );
  }

  render() {
    return (
      <div>
        {this.state.showAddedEvent ? (
          <Alert>
            <p>{this.state.eventAddMessage} You can view it <a href={this.state.eventAddLink}>here.</a></p>
          </Alert>
        ) : null}
        <div className="calendar-container">
          <EventCalendar
            events={this.state.events}
            groupId={this.props.params.groupId}
            exportToGCal={({ event }) => this.exportToGCal(event)}
            Event={({ event }) => this.event(event)}
            EventAgenda={({ event }) => this.eventAgenda(event)}
          />
        </div>
      </div>
    );
  }
}
