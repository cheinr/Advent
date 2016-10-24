import React, { Component } from 'react';

//
export default class EventList extends Component {

    render() {
        return (
            <div>
                {
                    this.props.events.map(function(event) {
                        return event.id;
                    })
                }
            </div>
        );
    }
}