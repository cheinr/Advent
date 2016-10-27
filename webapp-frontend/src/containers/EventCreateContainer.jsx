import React, { Component } from 'react';
import EventCreate from '../components/EventCreate';
import axios from 'axios';

export default class EventCreateContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
            start_date: "",
            end_date: "",
            location: "",
            isPrivate: false
        };
        this.nameChange = this.nameChange.bind(this);
        this.descChange = this.descChange.bind(this);
        this.startChange = this.startChange.bind(this);
        this.endChange = this.endChange.bind(this);
        this.locChange = this.locChange.bind(this);
        this.privateChange = this.privateChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    nameChange(e) {
        this.setState({name: e.target.value});
    }
    descChange(e) {
        this.setState({description: e.target.value});
    }
    startChange(e) {
        this.setState({start_date: e});
    }
    endChange(e) {
        this.setState({end_date: e});
    }
    locChange(e) {
        this.setState({location: e.target.value});
    }
    privateChange(e) {
        console.log(e.target.checked);
        this.setState({isPrivate: e.target.checked});
    }

    submitForm() {
        const url = "http://localhost:3000/api/event/create/";
        const data = {

            name: this.state.name,
            description: this.state.description,
            startDate: this.state.start_date != "" ? this.state.start_date.format('YYYY-MM-DD HH:mm:ss') : undefined,
            endDate: this.state.end_date != "" ? this.state.end_date.format('YYYY-MM-DD HH:mm:ss') : undefined,
            location: this.state.location,
            isPrivate: this.state.isPrivate
        };
        axios({method: 'post',
                headers: {'Authorization': localStorage.token},
                url: url,
                data: data}
            )
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
        <div>
            <EventCreate
                nameChange={this.nameChange}
                descChange={this.descChange}
                startChange={this.startChange}
                endChange={this.endChange}
                locChange={this.locChange}
                privateChange={this.privateChange}
                submitForm={this.submitForm}
                values={this.state}
            />
        </div>
        )
    }
}