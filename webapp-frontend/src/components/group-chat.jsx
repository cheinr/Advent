import React, {Component} from 'react';
import auth from '../auth';
import {withRouter} from 'react-router';
import io from 'socket.io-client';

//import ChatMessage from './chat-message';

const GroupChat = withRouter(React.createClass({ //withRouter gives this component the router in props
  getInitialState: function() {
      return {messages: ["test: one message", "test: two messages"]};
  },

  componentDidMount: function() {
    this.state = {messages: ["test: one message", "test: two messages"]}; //initialize with empty array

    socket = io();
    socket.on('chat message', function(msg) {
        this.state.messages.push(msg);
    });
  },

  sendMessage: function() {
      socket.emit('chat message', )
  },

  render: function() {
        return (
            <div>
                <h3>{this.props.groupName} Chat</h3>
                <div className="chat-box">

                </div>
                <input type="text"  />
                <button type="button" onClick="this.sendMessage()">Send</button>
            </div>
        );
    }
}));

export default GroupChat;
