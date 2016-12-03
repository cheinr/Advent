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
    const url = '/api/event/list/';

    // TODO dszopa 11/22/16 - It does not seem right that this is a post
    axios.post(url)
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
