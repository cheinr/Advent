
import React, {Component} from 'react';
import axios from 'axios';

export default class UserGroupRoleChanger extends Component {

    constructor() {
	super();
	this.changeUserRole = this.changeUserRole.bind(this);
    }
    changeUserRole() {
	console.log(this.refs.newRole.value);
	axios.post(`/api/usergroup/${this.props.usergroup.id}/role/edit`, {
	    role: this.refs.newRole.value
	}).then( (resp) => {
	    
	}).catch( (err) => {
	    console.log(err);
	});
    }
    
    render() {
        return (
	    <div className="form-inline pull-right">
		<select ref="newRole"
			className="form-control">
		    <option
			value='ADMIN'>
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
	    </div>
	);
    }
}
    
