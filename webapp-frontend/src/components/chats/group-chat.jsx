import React, {Component} from 'react';
import io from 'socket.io-client';

import ChatMessageContainer from './chat-message-container';
import ChatMessageSender from './chat-message-sender';


/*
*   To use this just pass in the logged in user object and 
*   a group object as they come from the backend.
*  
*   Ex: <GroupChat user={<UserObject>} group={<GroupObject>}
*/
export default class GroupChat extends React.Component {
  constructor(props) {
    super(props);
    this.socket = this.connect(this.props.group.id);
    this.state = {messages: []};
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
