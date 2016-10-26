import React from 'react';


export default class ChatMessageSender extends React.Component {
  constructor(props) {
    super(props);
    this.handleSend = this.handleSend.bind(this);
  }

  handleSend() {
    this.props.onSend(this.refs.messageInput.value);
    this.refs.messageInput.value = "";
  }

  render() {
    return (
      <div className="form-inline">
           <input type="text" ref="messageInput" className="form-control" />
           <button type="button" className="btn btn-default form-inline" onClick={this.handleSend}>Send</button>
      </div>
    );
  }
}
