import React, { Component } from 'react';

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
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.events.map(function(event) {
                            return (
                                <tr>
                                    <td>{event.name}</td>
                                    <td>{event.description}</td>
                                    <td>{event.startDate}</td>
                                    <td>{event.endDate}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}