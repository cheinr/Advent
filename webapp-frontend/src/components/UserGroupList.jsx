import React, { Component } from 'react';
import { Link } from 'react-router';
import UserGroupRoleChanger from './UserGroupRoleChanger';


export default class UserGroupList extends Component {

    userCanEditRole(userGroup) {
	if (userGroup.role.toUpperCase() !== "OWNER" &&
	this.props.role.toUpperCase() == "OWNER") {
	    return true;
	} else if((this.props.role.toUpperCase() == "ADMIN") &&
		  (userGroup.role.toUpperCase() !== "ADMIN") &&
		  userGroup.role.toUpperCase() !== "OWNER") {
	    return true;
	} else {
	    return false;
	}
    }
    
    render() {
	console.log(this.props.role);
        return (
            <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.users.map( function(userGroup) {
                        return (
                            <tr key={userGroup.id}>
                                <td>{userGroup.user.displayName}</td>
                                <td>
				    <span>
					{userGroup.role}
					{
					    this.userCanEditRole(userGroup) &&
					    <UserGroupRoleChanger
						usergroup={userGroup}
						role={this.props.role}
						updateGroup={this.props.updateGroup}
					    />
					    
					}
				    </span>
				</td>
                                <td>
                                    <Link to={`/user/${userGroup.user.id}`}>View User</Link>
			
                                </td>
                            </tr>
                        )
                    }.bind(this))
                }
                </tbody>
            </table>
        );
    }
}
