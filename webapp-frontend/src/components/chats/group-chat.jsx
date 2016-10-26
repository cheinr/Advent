import React, {Component} from 'react';
import io from 'socket.io-client';

import ChatMessageContainer from './chat-message-container';
import ChatMessageSender from './chat-message-sender';


/*
*   State variables : messages
*   Prop variables : groupName, groupID - might just pass in group
*/
export default class GroupChat extends React.Component {
  constructor(props) {
    super(props);
    this.socket = this.connect(this.props.group.id);
    this.state = {messages: [
      {senderName: "Colin", message: "Hello Chat!", date: "10/23/95", id: 1000 },
      {senderName: "Ryan", message: "This is a message", date: "10/23/95", id: 1001}]};
    }

    componentDidMount() {

      this.socket.on('chat message', function(msg) {
        var messages = this.state.messages;
        messages.push(msg);
        console.log(messages);
        this.setState(messages);
      }.bind(this));
    }

    handleMessageSend(message) {
      //var socket = this.connect(0);
      //data to send
      var data = {senderName: this.props.user.displayName, message: message,
        groupId: this.props.group.id};
        this.socket.emit('chat message', data);
      }

      connect(groupId) {
        return io().emit("join-room", groupId);
      }


      render() {

        return (
          <div>
          <h3>{this.props.group.groupName} Chat</h3>
          <ChatMessageContainer messages={this.state.messages} />
          <ChatMessageSender onSend={this.handleMessageSend.bind(this)} />
          </div>
        );
      }
    }
