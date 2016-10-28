import React, { Component } from 'react';
import { Link } from 'react-router';

export default class GroupInfo extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>
                    <div>{this.props.group.name}</div>
                </h1>
                <div className="form-group">
                    <div>Description: {this.props.group.description}</div>
                </div>
                <Link className="btn" role="button"
                      to="/event/create">
                    Create Event
                </Link>
            </div>
        );
    }
}