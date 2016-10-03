import React, { Component, CameraRoll } from 'react';
import EventCreate from './../components/EventCreate.js';

export default class EventCreateContainer extends Component {
    constructor() {
        super();
        this.state = {
            test: "before"
        };
        this.testFunc = this.testFunc.bind(this);
    }

    testFunc() {
        this.setState({test: "after"});
    }

    render() {
        return <EventCreate
            testFunc={this.testFunc}
            test={this.state.test}
        />
    }
}