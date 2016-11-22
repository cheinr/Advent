
import React, {Component} from 'react';
import axios from 'axios';

export default class UserGroupRoleChanger extends Component {

    constructor() {
	super();
	this.state = {
	    loading: false
	}
	this.changeUserRole = this.changeUserRole.bind(this);
    }
    changeUserRole() {
	if(this.refs.newRole.value === this.props.usergroup.role)
	    return;
	this.setState({loading: true});
	axios.post(`/api/usergroup/${this.props.usergroup.id}/role/set/${this.refs.newRole.value}`, {}).then( (resp) => {
	    this.props.updateGroup();
	    this.setState({loading: false});
	    console.log(resp);
	}).catch( (err) => {
	    console.log(err);
	});
    }
    
	render() {
	    var loading_icon = "";
	    if(this.state.loading) {
		loading_icon = 	(
		    <span>
			<i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
			<span className="sr-only">Loading...</span>
		    </span>)
	    }
            return (
		
		<div className="pull-right">
		    <div className="form-inline">
			<select ref="newRole" className="form-control ">
			    <option value='ADMIN'>
				Admin
			    </option>
			    <option value='MODERATOR'>
				Moderator
			    </option>
			    <option value='MEMBER'>
				Member
			    </option>
			</select>
			<button className="btn btn-default" onClick={this.changeUserRole}>
			    Change Role
			</button>
			{loading_icon}
		    </div>
		</div>
	);
    }
}
    
