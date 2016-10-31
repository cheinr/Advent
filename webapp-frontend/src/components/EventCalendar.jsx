import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { Link } from 'react-router';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

function Event({ event }) {
    return (
        <span>
      <strong>
      {event.title}
      </strong>
            { event.desc && (':  ' + event.desc)}
    </span>
    )
}

function EventAgenda({ event }) {
    return (
        <span>
            <em>{event.title}</em>
            <p>{ event.desc }</p>
            <Link to={`/event/${event.id}`}>View Event</Link>
        </span>
    )
}

export default class EventCalendar extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <BigCalendar
                {...this.props}
                events={this.props.events}
                timeslots={2}
                defaultDate={new Date()}
                defaultView="agenda"
                components={{
                    event: Event,
                    agenda: {
                        event: EventAgenda
                    }
                }}
            />
        );
    }
}