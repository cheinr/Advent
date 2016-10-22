import React from 'react';

var ScheduleAddEvent = React.createClass({
  render: function() {
    //TODO -find alternative to these <br/> tags
    return (
      <div>
        <h1>Add Event</h1>

        <input type="text" placeholder="name"/>
        <br />
        <br />
        <input type="text" placeholder="mm/dd/yy"/>
        <br />
        <br/>
        <input type="text" placeholder="when"/>
        <b> to </b>
        <input type="text" placeholder="when" />
        <br/>
        <br/>
        <b>@ </b>
        <input type="text" placeholder="location" />
        <br/>
        <br/>
        <button>submit</button>
      </div>
    )
  }

});

export default ScheduleAddEvent;
