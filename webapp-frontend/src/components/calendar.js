import React, {Component} from 'react';
import auth from '../auth';
import {withRouter} from 'react-router';


const Calendar = React.createClass({
  componentDidMount: function() {
    if(googleApiLoaded) {
      this.loadCalendarApi();
    } else {
      window.addEventListener('google-loaded',this.loadCalendarApi());
    }
  },

  listUpcomingEvents : function() {
    var request = gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    });

    request.execute(function(resp) {
      var events = resp.items;
    //  appendPre('Upcoming events:');

      if (events.length > 0) {
        for (i = 0; i < events.length; i++) {
          var event = events[i];
          var when = event.start.dateTime;
          if (!when) {
            when = event.start.date;
          }
          console.log(event.summary + ' (' + when + ')')
        }
      } else {
        console.log('No upcoming events found.');
      }
    });
  },

  /**
   * Load Google Calendar client library. List upcoming events
   * once client library is loaded.
   */
  loadCalendarApi: function() {
    gapi.client.load('calendar', 'v3', this.listUpcomingEvents);
  },

  render: function() {
    return (
      <div>
        <h1>This is our Calendar.</h1>

      </div>
    )
  }
});

export default Calendar;
