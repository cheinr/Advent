import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';


export default class EventCalendar extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <BigCalendar
                {...this.props}
                events={events}
                defaultDate={new Date(2015, 3, 1)}
            />
        );
    }
}