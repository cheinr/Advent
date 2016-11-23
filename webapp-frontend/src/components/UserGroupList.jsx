import React, { Component } from 'react';
import { Link } from 'react-router';
import UserGroupRoleChanger from './UserGroupRoleChanger';


export default class UserGroupList extends Component {

    changeUserRole(e) {
	console.log(e);
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
					    (userGroup.role !== "OWNER") &&
					     ((this.props.role == "OWNER") ||
					     ((this.props.role == "ADMIN") &&
					      (userGroup.role !== "ADMIN"))) &&
					    
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
