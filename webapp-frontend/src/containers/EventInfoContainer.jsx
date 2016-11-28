import React, { Component } from 'react';
import ReactDom from 'react-dom';
import EventInfo from '../components/events/EventInfo.jsx';
import axios from 'axios';

import LocationMap from '../components/LocationMap';

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
        const url = `/api/event/id/${this.props.params.eventId}`;
        axios({
            method: 'get',
            url: url,
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
		    mapData: true,
                    private: response.data.private
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    respondToEvent(response) {
        const url = `/api/event/respond/`;
        const data = {
            eventId: this.props.params.eventId,
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
	var map = "";
	if(this.state.mapData) {
	    map = <LocationMap lat={42.028415} lng={-93.65098} />
	}
        return (
	    <div>
	    <EventInfo event={this.state}
	    respondToEvent={(message) => this.respondToEvent(message)}
            />
	    {map}
	    </div>
	);
    }
}
