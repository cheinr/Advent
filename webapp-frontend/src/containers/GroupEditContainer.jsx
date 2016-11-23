import React, {Component } from 'react'
import GroupEdit from '../components/GroupEdit';
import axios from 'axios';

export default class GroupEditContainer extends Component {
    constructor() {
	super();
	this.state = {
	    id: "",
	    name: "",
	    description: "",
	    userGroups: null
	};
	this.nameChange = this.nameChange.bind(this);
	this.descChange = this.descChange.bind(this);
	this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
	this.getGroup();
    }

    componentWillReceiveProps(newProps) {
	if( newProps.user !== this.props.user
	 && this.state.userGroups !== null) {
	    
	    if(!this.checkUserIsAdmin(newProps.user, this.state.userGroups)) {
		window.location.replace("/");
	    }
	}
    }

    checkUserIsAdmin(user, userGroups) {
	var userIsAdmin = false;
	for( var i=0; i<userGroups.length; i++) {
	    if(userGroups[i].user.id === user.id
	       && (userGroups[i].role.toUpperCase() === "ADMIN"
		|| userGroups[i].role.toUpperCase() === "OWNER")) {
		
		userIsAdmin = true;
	    }
	}

	return userIsAdmin;
    }

    getGroup() {
	const url = `/api/group/${this.props.params.groupId}`;
	axios({
	    method: 'get',
	    url: url
	})
	    .then(resp => {
		console.log(resp.data);
		
		if(this.props.user !== null) {
		    if(!this.checkUserIsAdmin(this.props.user,
					      resp.data.userGroups)) {
			//TODO - use router here.
			    window.location.replace("/");
		    }
		}
		
		this.setState({
		    id: resp.data.id,
		    name: resp.data.groupName,
		    description: resp.data.description,
		    userGroups: resp.data.userGroups
		});
	    })
	    .catch(error => {
		console.log(error);
	    });
    }

    nameChange(e){
	this.setState({name: e.target.value});
    }

    descChange(e){
	this.setState({description: e.target.value});
    }

    submitForm() {
	const url = "/api/group/edit/";
	const data = {
	    id: this.state.id,
	    groupName: this.state.name,
	    description: this.state.description
	};
	axios({method: 'post',
	       
	       url: url,
	       data: data}
	)
	    .then(response => {
		console.log(response.data)
	    })
	    .catch(error => {
		console.log(error);
	    });
    };


    render(){
	return(
	    <div>
		<GroupEdit
nameChange={this.nameChange}
descChange={this.descChange}
submitForm={this.submitForm}
values={this.state}
		/>
	    </div>
	)
    }
    
}
