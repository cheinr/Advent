import React, {Component} from 'react';
import io from 'socket.io-client';

import ChatMessageContainer from './chat-message-container';
import ChatMessageSender from './chat-message-sender';


/*
*   State variables : messages, newMsgText?
*   Prop variables : groupName, groupID - might just pass in group
*/
const GroupChat = React.createClass({ //withRouter gives this component the router in props
  getInitialState: function() {
      return {messages: ["test: one message", "test: two messages"]};
  },

  componentDidMount: function() {

    socket = io();
    socket.on('chat message', function(msg) {
        this.state.messages.push(msg);
    });
  },

  sendMessage: function() {
      socket.emit('chat message', )
  },

  render: function() {
    var MESSAGES = [
    {senderName: "Colin", message: "Hello Chat!", date: "10/23/95", id: 0 },
    {senderName: "Ryan", message: "This is a message", date: "10/23/95", id: 1}];

      return (
        <div>
          <h3>{this.props.groupName} Chat</h3>
          <ChatMessageContainer messages={MESSAGES} />
          <ChatMessageSender />
        </div>
      );
    }
});

export default GroupChat;
