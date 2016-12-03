import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import EventCalendar from '../components/EventCalendar';

export default class EventCalendarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
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

  render() {
    return (
      <div className="calendar-container">
        <EventCalendar
          events={this.state.events}
          groupId={this.props.params.groupId}
        />
      </div>
    );
  }
}
