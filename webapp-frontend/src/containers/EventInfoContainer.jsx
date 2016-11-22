import React, { Component } from 'react';
import ReactDom from 'react-dom';
import EventInfo from '../components/events/EventInfo.jsx';
import axios from 'axios';

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
            private: ''
        };
        this.getEvent = this.getEvent.bind(this);
        this.respondToEvent = this.respondToEvent.bind(this);
    }

    componentDidMount() {
        this.getEvent();
    }

    getEvent() {
        const url = `http://localhost:3000/api/event/id/${this.props.params.eventId}`;
        const headers = {'Authorization': localStorage.token};
        axios({
            method: 'get',
            url: url,
            headers: headers
        })
            .then(response => {
                console.log(response.data);
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    startDate: response.data.startDate,
                    endDate: response.data.endDate,
                    location: response.data.location,
                    group: response.data.group,
                    eventResponses: response.data.eventResponses,
                    private: response.data.private
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    respondToEvent(response) {
        const url = `http://localhost:3000/api/event/respond/`;
        const data = {
            eventId: this.props.params.eventId,
            response: response
        };
        axios({
            method: 'post',
            url: url,
            data: data
        })
            .then(response => {
                this.getEvent();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return <EventInfo
            event={this.state}
            respondToEvent={(message) => this.respondToEvent(message)}
        />
    }
}