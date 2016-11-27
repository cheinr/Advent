import React, { Component } from 'react';
import EventCreate from '../components/events/EditEvent';
import axios from 'axios';

export default class EditEventContainer extends Component {
    constructor() {
        super();
        this.state = {
			id: "",
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
	
	componentDidMount() {
		this.getEvent();
	}

    getEvent() {
        const url = `http://localhost:3000/api/event/id/${this.props.params.eventId}`;
        const headers = {'Authorization': localStorage.token};
        axios({
            method: 'get',
            url: url,
            headers: headers
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
                    private: response.data.private
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
	
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
        this.setState({isPrivate: e.target.checked});
    }

    submitForm() {
        const url = "http://localhost:3000/api/event/edit/";
        const data = {
			id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            startDate: this.state.start_date != "" ? this.state.start_date.format('YYYY-MM-DD HH:mm:ss') : undefined,
            endDate: this.state.end_date != "" ? this.state.end_date.format('YYYY-MM-DD HH:mm:ss') : undefined,
            location: this.state.location,
            group: {
                id: this.props.params.groupId
            },
            isPrivate: this.state.isPrivate
        };
        console.log(data);
        axios({method: 'post',
                headers: {'Authorization': localStorage.token},
                url: url,
                data: data}
            )
            .then(response => {
                console.log(response.data);
                this.context.router.push(`/event/${response.data.id}`);
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
