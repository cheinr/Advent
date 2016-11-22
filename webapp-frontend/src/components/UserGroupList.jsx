import React, { Component } from 'react';
import { Link } from 'react-router';



export default class UserGroupList extends Component {

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

					<div className="form-inline pull-right">
					    <select className="form-control">
						<option>
						    Admin
						</option>
						<option>
						    Moderator
						</option>
						<option>
						    Member
						</option>
					    </select>
					    <button className="btn btn-default">
					Change Role
					    </button>
					</div>

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
