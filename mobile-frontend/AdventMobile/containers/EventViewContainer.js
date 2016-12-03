import React, { Component } from 'react';
import EventView from './../components/EventView';
import { StyleSheet, Image } from 'react-native';
var Platform = require('react-native').Platform;

export default class EventViewContainer extends Component {
    constructor(props) {

        super(props);

        this.state = {
            event: '',
        };
    }

    _fetchData(eventId) {

        fetch('url/eventId', {
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

                this.setState({event:responseData});
            })
            .done();
    }

    componentDidMount() {
        this._fetchData(this.props.eventId)
    }

    render() {
        return <EventView
            event={this.state.event}
        />;
    }
}