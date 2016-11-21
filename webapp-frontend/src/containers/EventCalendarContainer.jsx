import React, { Component } from 'react';
import EventCalendar from '../components/EventCalendar';
import axios from 'axios';
import moment from 'moment';

export default class EventCalendarContainer extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        };
        this.exportToGCal = this.exportToGCal.bind(this);
    }

    componentDidMount() {
        const url = `http://localhost:3000/api/event/group/${this.props.params.groupId}`;
        const headers = {'Authorization': localStorage.token};

        axios({method: 'post',
            headers: headers,
            url: url}
        )
            .then(response => {
                var eventArr = [];

                console.log(response.data);
                response.data.map(function(event) {
                    eventArr.push({
                        id: event.id,
                        'title': event.name,
                        desc: event.description,
                        'start': moment(event.startDate, 'YYYY-MM-DD HH:mm:ss').toDate(),
                        'end': moment(event.endDate, 'YYYY-MM-DD HH:mm:ss').toDate()
                    });
                });
                console.log(eventArr);
                this.setState({events: eventArr});
            })
            .catch(error => {
                console.log(error);
            });
    }

    exportToGCal(event) {
        // TOOD post to gcal to create event in google calendars
    }

    render() {
        return (
            <div className="calendar-container">
                <EventCalendar
                    events={this.state.events}
                    groupId={this.props.params.groupId}
                    exportToGCal={(event) => {this.exportToGCal(event)}}
                />
            </div>
        )
    }
}