import React, { Component } from 'react';

//
export default class EventList extends Component {

    render() {
        return (
            <div>
                <h1>This is a temporary page to show the events and the database saving</h1>
                <br/>
                {this.props.events}
            </div>
        );
    }
}