import React, { Component } from 'react';
import { Link } from 'react-router';

//
export default class UserList extends Component {

    render() {
        return (
            <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.users.map(function(user) {
                        return (
                            <tr key={user.user.id}>
                                <td>
                                    <Link to={`/user/${user.user.id}`}>{user.user.displayName}</Link>
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