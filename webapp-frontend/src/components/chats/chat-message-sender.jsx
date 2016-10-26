import React from 'react';


export default class ChatMessageSender extends React.Component {

  handleSend() {
    this.props.handleMessageSend(this.refs.messageInput.value);
  }

  render() {
    return (
      <div>
         <form className="form-inline">
           <input type="text" ref="messageInput" className="form-control" />
           <button type="button" className="btn btn-default" onClick={this.handleSend}>Send</button>
         </form>
      </div>
    );
  }
}
