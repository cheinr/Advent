import React, {Component } from 'react'
import GroupEdit from '../components/GroupEdit';
import axios from 'axios';

export default class GroupEditContainer extends Component {
	constructor() {
		super();
		this.state = {
			id: "",
			name: "",
			description: ""
		};
		this.nameChange = this.nameChange.bind(this);
		this.descChange = this.descChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	componentDidMount() {
	    this.getGroup();
	    axios.get(`/group/${this.props.params.groupId}/members/${this.props.user.id}`)
		 .then( function(resp) {
		     if(resp === null || resp.role !== "MODERATOR") {
			 //redirect
			 window.location.replace("/");
		     }
		 }).catch(function(error) {

		 });
	}

	getGroup() {
		const url = `/api/group/${this.props.params.groupId}`;
		axios({
			method: 'get',
			url: url
		})
			.then(response => {
				console.log(response.data);
				this.setState({
					id: response.data.id,
					name: response.data.groupName,
					description: response.data.description,
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
