import React from 'react';

export default class ChatMessage extends React.Component {

  render() {
    return (
      <div className="chat-message">
         <b>{this.props.message.senderName}: </b>
         <p style={{display: "inline"}}>{this.props.message.message}</p>
         <br/>
         <small>sent at: {this.props.message.date}</small>
      </div>
    );
  }
}
