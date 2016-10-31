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
    }

    componentDidMount() {
        const url = `http://localhost:3000/api/event/list`;
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

    render() {
        return (
            <div className="calendar-container">
                <EventCalendar
                    events={this.state.events}
                />
            </div>
        )
    }
}