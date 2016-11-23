import React, { Component } from 'react';
import axios from 'axios';
import EventList from '../components/events/EventList';

export default class EventListContainer extends Component {
  constructor() {
    super();

    this.state = {
      events: [],
    };
    this.getEvents = this.getEvents.bind(this);
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    const url = 'http://localhost:3000/api/event/list/';

    axios({method: 'post',
        headers: {'Authorization': localStorage.token},
        url: url}
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ events: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <EventList
        events={this.state.events}
      />
    );
  }
}
