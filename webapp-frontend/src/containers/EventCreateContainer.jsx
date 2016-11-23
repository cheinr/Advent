import React, { Component } from 'react';
import EventCreate from '../components/events/EventCreate';
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
	    loading: true,
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
	if(this.props.user !== null) {
	    this.checkUserAuthorization(this.props.user);
	}
    }

    componentWillReceiveProps(newProps) {
	if( newProps.user !== this.props.user) {
	    this.checkUserAuthorization(newProps.user);
	}
    }

    //checks if the user is authorized to make events for this group
    checkUserAuthorization(user) {
	var url = `/api/group/${this.props.params.groupId}/members/${user.id}`;
	axios.get(url).then((resp) => {
	    if(resp.data.role === null
	       || (resp.data.role.toUpperCase() !== "ADMIN"
		&& resp.data.role.toUpperCase() !== "MODERATOR"
		&& resp.data.role.toUpperCase() !== "OWNER")) {
		
		window.location.replace("/");
	    } else {
		this.setState({loading: false});
		console.log(resp.data);
	    }
	}).catch(function(error) {
	    console.log(error);
	});
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
        this.setState({isPrivate: e.target.checked});
    }

    submitForm() {
        const url = "/api/event/create/";
        const data = {

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
	if(this.state.loading) {
	    return(
		<div>
		    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
		    <span className="sr-only">Loading...</span>
		</div>
	    );
	} else {
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
}

EventCreateContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};
