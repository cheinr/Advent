import React, { Component } from 'react';
import axios from 'axios';
import EventInfo from '../components/events/EventInfo';

export default class EventInfoContainer extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      descriptions: '',
      startDate: '',
      endDate: '',
      location: '',
      group: '',
      eventResponses: [],
      private: '',
    };
    this.getEvent = this.getEvent.bind(this);
    this.respondToEvent = this.respondToEvent.bind(this);
  }

  componentDidMount() {
    this.getEvent();
  }

  getEvent() {
    const url = `/api/event/id/${this.props.params.eventId}`;
    axios.get(url)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          startDate: response.data.startDate,
          endDate: response.data.endDate,
          location: response.data.location,
          group: response.data.group,
          eventResponses: response.data.eventResponses,
          private: response.data.private,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  respondToEvent(response) {
    const url = '/api/event/respond/';
    const data = {
      eventId: this.props.params.eventId,
      response,
    };
    axios({
      method: 'post',
      url,
      data,
    })
      .then((ajaxResponse) => {
        this.getEvent();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <EventInfo
        event={this.state}
        respondToEvent={(message) => { this.respondToEvent(message); }}
      />
    );
  }
}
