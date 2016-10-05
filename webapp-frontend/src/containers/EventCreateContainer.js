import React, { Component } from 'react';
import EventCreate from './../components/EventCreate.js';
import axios from 'axios';

export default class EventCreateContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
            start_date: "",
            end_date: "",
            location: ""
        };
        this.nameChange = this.nameChange.bind(this);
        this.descChange = this.descChange.bind(this);
        this.startChange = this.startChange.bind(this);
        this.endChange = this.endChange.bind(this);
        this.locChange = this.locChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    nameChange(e) {
        this.setState({name: e.target.value});
    }
    descChange(e) {
        this.setState({description: e.target.value});
    }
    startChange(e) {
        this.setState({start_date: e.target.value});
    }
    endChange(e) {
        this.setState({end_date: e.target.value});
    }
    locChange(e) {
        this.setState({location: e.target.value});
    }

    submitForm() {
        const url = "http://localhost:3000/api/event/create/";
        const data = {

            name: this.state.name,
            description: this.state.description,
            startDate: this.state.start_date,
            endDate: this.state.end_date,
            location: this.state.location
        };

        axios.post(url, data)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return <EventCreate
            nameChange={this.nameChange}
            descChange={this.descChange}
            startChange={this.startChange}
            endChange={this.endChange}
            locChange={this.locChange}
            submitForm={this.submitForm}
            values={this.state}
        />
    }
}