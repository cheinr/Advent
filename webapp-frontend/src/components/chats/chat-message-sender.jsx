import React from 'react';


export default class ChatMessageSender extends React.Component {
  constructor(props) {
    super(props);
    this.handleSend = this.handleSend.bind(this);
  }

    handleSend() {
	if(this.refs.messageInput.value !== "") {
	    this.props.onSend(this.refs.messageInput.value);
	    this.refs.messageInput.value = "";
	}
    }

    handleKeyPress(e) {
	if(e.key === 'Enter') {
	    this.handleSend();
	}
    }

  render() {
    return (
      <div className="input-group">
        <input id="messageInput" ref="messageInput" type="text" className="form-control" onKeyPress={this.handleKeyPress.bind(this)}/>
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="button" onClick={this.handleSend}>Send</button>
        </span>
      </div>
    );

  }
}
