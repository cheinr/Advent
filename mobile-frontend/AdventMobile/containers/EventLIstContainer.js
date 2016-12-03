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

    _fetchData() {

        fetch('url', {
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

    eventPage(eventId) {

        this.props.toRoute({
            name: "Event",
            component: EventViewContainer,
            passProps: {
                eventId: eventId,
            }
        });
    }

    componentDidMount() {
        this._fetchData()
    }

    render() {
        return <EventList
            events={this.state.events}
            eventPage={this.eventPage}
        />;
    }
}