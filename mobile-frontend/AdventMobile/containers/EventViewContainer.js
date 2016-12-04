import React, { Component } from 'react';
import EventView from './../components/EventView';
import { StyleSheet, Image } from 'react-native';
var Platform = require('react-native').Platform;

export default class EventViewContainer extends Component {
    constructor(props) {

        super(props);
    }

    render() {
        return <EventView
            event={this.props.event}
        />;
    }
}