import React from 'react';

export default class ChatMessage extends React.Component {

  render() {
    return (
      <div className="chat-message">
         <b>{this.props.message.senderName}: </b>
         <p>{this.props.message.message}</p>
         <p>{this.props.message.date}</p>
      </div>
    );
  }
}
