import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import EventCalendar from '../components/EventCalendar';
import { Link } from 'react-router';

export default class EventCalendarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
        this.exportToGCal = this.exportToGCal.bind(this);
        this.Event = this.Event.bind(this);
        this.EventAgenda = this.EventAgenda.bind(this);
    }

  componentDidMount() {
    const url = `/api/event/group/${this.props.params.groupId}`;

    axios.post(url)
      .then((response) => {
        const eventArr = [];

        response.data.map(function(event) {
          eventArr.push({
            id: event.id,
            title: event.name,
            desc: event.description,
            start: moment(event.startDate, 'YYYY-MM-DD HH:mm:ss').toDate(),
            end: moment(event.endDate, 'YYYY-MM-DD HH:mm:ss').toDate(),
          });
        });
        this.setState({ events: eventArr });
      })
      .catch((error) => {
        console.log(error);
      });
  }

    exportToGCal(event) {
        // TOOD post to gcal to create event in google calendars
        console.log("hit");
    }

    Event(event) {
        return (
            <span>
                <strong>
                    {event.title}
                </strong>
                {event.desc && (':  ' + event.desc)}
            </span>
        )
    }

    EventAgenda(event) {
        // todo fix this probably will not work as this is not defined in this scope
        return (
            <span>
                <em>{event.title}</em>
                <p>{ event.desc }</p>
                <Link to={`/event/${event.id}`}>View Event</Link>
                <a onClick={() => this.exportToGCal(event)}>Export to Google Calendar</a>
            </span>
        )
    }

    render() {
        return (
            <div className="calendar-container">
                <EventCalendar
                    events={this.state.events}
                    groupId={this.props.params.groupId}
                    exportToGCal={(event) => {this.exportToGCal(event)}}
                    Event={({event}) => {return this.Event(event)}}
                    EventAgenda={({event}) => {return this.EventAgenda(event)}}
                />
            </div>
        )
    }
}
