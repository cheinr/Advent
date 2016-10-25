import React, {Component} from 'react';
import auth from '../auth';
import {withRouter} from 'react-router';
import io from 'socket.io';

const GroupChat = withRouter(React.createClass({ //withRouter gives this component the router in props

  componentDidMount: function() {
    this.state = {messages: ["test: one message", "test: two messages"]}; //initialize with empty array

    socket = io();
    socket.on('chat message', function(msg) {
        this.state.messages.push(msg);
    });
  },


  render: function() {
    render() {
        return (
            <div>
                <h3>{this.props.groupName} Chat</h3>
                <div id="areaMap">Loading...</div>
            </div>
        );
    }
}
}));

export default SignIn;
