import React, {Component } from 'react'
import GroupEdit from '../components/GroupEdit';
inport axios from 'axios';

export default class GroupEditContainer extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			description: ""
		};
		this.nameChange = this.nameChange.bind(this);
		this.descChange = this.descChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}
	
	nameChange(e){
		this.setState({name: e.target.value});
	}
	
	descChange(e){
		this.setState({description: e.taget.value}); 
	}
	
	submitForm() {
		const url = "http://localhost:3000/api/group/edit/";
		const data = {
			groupName: this.state.name,
			description: this.state.description
		};
		axios({method: 'post,
					headers: {'Authorization': localStorage.token}
					url: url,
					data: data}
		)
			.then(response = > {
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