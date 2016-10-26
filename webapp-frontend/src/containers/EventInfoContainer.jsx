import React, { Component } from 'react';
import ReactDom from 'react-dom';
import EventInfo from '../components/EventInfo.jsx';
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
            userGoing: '',
            private: ''
        };
        this.getEvent = this.getEvent.bind(this);
    }

    componentDidMount() {
        this.getEvent();
    }

    getEvent() {
        const url = `http://localhost:3000/api/event/${this.props.params.eventId}`;
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
                    userGoing: response.data.userGoing,
                    private: response.data.private
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return <EventInfo
            event={this.state}
        />
    }
}