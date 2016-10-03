import React, { Component } from 'react';
import EventCreate from './../components/EventCreate.js';

export default class EventCreateContainer extends Component {
    constructor() {
        super();
        this.state = {
            test: "before"
        };
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm() {
        this.setState({test: "after"});
    }

    render() {
        return <EventCreate
            submitForm={this.submitForm}
            test={this.state.test}
        />
    }
}