import React, {Component} from 'react';
import io from 'socket.io-client';

import ChatMessageContainer from './chat-message-container';
import ChatMessageSender from './chat-message-sender';

import auth from "../../auth";

import axios from 'axios';

/*
*   State variables : messages
*   Prop variables : groupName, groupID - might just pass in group
*/
export default class GroupChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: [
    {senderName: "Colin", message: "Hello Chat!", date: "10/23/95", id: 0 },
    {senderName: "Ryan", message: "This is a message", date: "10/23/95", id: 1}]};
  }

  componentDidMount() {


    socket = io();
    socket.on('chat message', function(msg) {
        this.state.messages.push(msg);
    });
  }

  handleMessageSend(message) {
    socket.emit('chat message', message);
  }

  render() {

      return (
        <div>
          <h3>{this.props.groupName} Chat</h3>
          <ChatMessageContainer messages={this.state.messages} />
          <ChatMessageSender onSend={this.handleMessageSend} />
        </div>
      );
    }
}
