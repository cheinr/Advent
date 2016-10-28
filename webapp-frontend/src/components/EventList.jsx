import React, { Component } from 'react';
import { Link } from 'react-router';

//
export default class EventList extends Component {

    render() {
        return (
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.events.map(function(event) {
                            return (
                                <tr key={event.id}>
                                    <td>{event.name}</td>
                                    <td>{event.description}</td>
                                    <td>{event.startDate}</td>
                                    <td>{event.endDate}</td>
                                    <td>
                                        <Link to={`/event/${event.id}`}>View Event</Link>
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