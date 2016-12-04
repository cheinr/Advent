import React, { Component } from 'react';
import EventList from '../components/EventList';
import EventViewContainer from './EventViewContainer';
import { StyleSheet, Image } from 'react-native';
var Platform = require('react-native').Platform;

export default class GroupListContainer extends Component {
    constructor(props) {

        super(props);

        this.state = {
            events: []
        };
        this.eventPage = this.eventPage.bind(this)
    }

    _fetchData(userEmail) {
        fetch('http://proj-309-la-03.cs.iastate.edu/api/auth/event/my-events/' + userEmail, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                result: result
            })
        })
            .then((response) => response.json())
            .then((responseData) => {

                this.setState({events:responseData});
            })
            .done();
    }

    eventPage(event) {

        this.props.toRoute({
            name: "Event",
            component: EventViewContainer,
            passProps: {
                event: event,
            }
        });
    }

    componentDidMount() {
        this._fetchData(this.props.user.email)
    }

    render() {
        return <EventList
            events={this.state.events}
            eventPage={this.eventPage}
        />;
    }
}