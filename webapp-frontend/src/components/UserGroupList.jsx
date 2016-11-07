import React, { Component } from 'react';
import { Link } from 'react-router';

//
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
                            <tr key={userGroup.user.id}>
                                <td>{userGroup.user.displayName}</td>
                                <td>{userGroup.role}</td>
                                <td>
                                    <Link to={`/user/${userGroup.user.id}`}>View User</Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}