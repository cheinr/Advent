import React from 'react';

import ChatMessage from './chat-message';

export default class ChatMessageContainer extends React.Component {

  render() {
    var chat_messages = [];
    this.props.messages.forEach(function(msg) {
      chat_messages.push(<ChatMessage message={msg} key={msg.id} />);
    });
    return (
      <div className="chat-box">
        {chat_messages}
      </div>
    );
  }
}
