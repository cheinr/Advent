import React, { Component } from 'react';
import { Link } from 'react-router';
import UserGroupRoleChanger from './UserGroupRoleChanger';


export default class UserGroupList extends Component {

    changeUserRole(e) {
	console.log(e);
    }
    
    render() {
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
                    this.props.users.map(function(userGroup) {
                        return (
                            <tr key={userGroup.id}>
                                <td>{userGroup.user.displayName}</td>
                                <td>
				    <span>
					{userGroup.role}
					{
					    (this.props.role == "ADMIN") &&
					(userGroup.role !== "ADMIN") &&

					<UserGroupRoleChanger
					    usergroup={userGroup}
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
