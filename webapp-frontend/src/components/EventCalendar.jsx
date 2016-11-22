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
//
// function EventAgenda({ event }) {
//     // todo fix this probably will not work as this is not defined in this scope
//     return (
//         <span>
//             <em>{event.title}</em>
//             <p>{ event.desc }</p>
//             <Link to={`/event/${event.id}`}>View Event</Link>
//
//             <a onClick={() => this.props.exportToGCal(event)}>View Event</a>
//         </span>
//     )
// }

export default class EventCalendar extends Component {
    componentDidMount() {

    }

    render() {
        console.log(this.props.Event);
        console.log(Event);
        return (
            <div>
                <Link to={`/group/${this.props.groupId}`}>Back to Group</Link>
                <div>
                    <BigCalendar
                        {...this.props}
                        events={this.props.events}
                        timeslots={2}
                        defaultDate={new Date()}
                        defaultView="agenda"
                        components={{
                            event: this.props.Event,
                            agenda: {
                                event: this.props.EventAgenda
                            }
                        }}
                    />
                </div>
            </div>
        );
    }
}