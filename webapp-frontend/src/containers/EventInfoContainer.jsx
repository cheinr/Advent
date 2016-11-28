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
	    geocoder: null,
	    locationValid: false,
            private: ''
        };
        this.getEvent = this.getEvent.bind(this);
        this.respondToEvent = this.respondToEvent.bind(this);
	this.getLocationCoords = this.getLocationCoords.bind(this);
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
		    geocoder: new google.maps.Geocoder(),
                    private: response.data.private
                });
		this.getLocationCoords();
            })
            .catch(error => {
                console.log(error);
            });
    };

    getLocationCoords() {
	this.state.geocoder.geocode({
	    'address':this.state.location
	}, function(results, status) {
	    if(status === "OK") {
		this.setState({
		    locationValid: true,
		    coords: [
			results[0].geometry.location.lat(),
			results[0].geometry.location.lng()
		    ]
		});
		console.log(this.state.coords);
	    } else {
		this.setState({
		    locationValid: false,
		});
		console.log(status);
	    }
	}.bind(this));	    
    }


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
	if(this.state.locationValid) {
	    map = (
		<LocationMap
		    lat={this.state.coords[0]}
		    lng={this.state.coords[1]}
		/>
	    );
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
