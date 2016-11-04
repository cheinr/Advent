import React, {Component} from 'react';
import io from 'socket.io-client';
import axios from 'axios';

import ChatMessageContainer from '../components/chats/chat-message-container';
import ChatMessageSender from '../components/chats/chat-message-sender';

/*
*  Container meant to be the handler for /chat/group/:groupId
*  You must give it access to the router in props.
*  (Call withRouter(GroupChatContainer))
*/

export default class GroupChatContainer extends React.Component {
    constructor(props) {
	super(props);
	this.state = {messages: []};
    }

    componentDidMount() {
	
	var url = `/api/group/${this.props.params.groupId}`;
	console.log("url: " + url);
	//check if group exists and get the name of the group.
	axios.get(url).then( (resp) => {
	    console.log(resp);
	    if(resp.data != "") {
		this.setState( {groupName: resp.data.groupName});
		this.socket = this.connect(this.props.params.groupId);
		this.socket.on('chat message', function(msg) {
		    var messages = this.state.messages;
		    messages.push(msg);
		    console.log(messages);
		    this.setState({messages: messages} );
		}.bind(this));
		this.render();
	    } else {
		//redirect user to main page if this one doesn't exist.
		this.props.router.replace("/");
		console.log("group doesn't exist");
	    }
	}).catch( function(error) {
	    console.log(error);
	});

    }

    handleMessageSend(message) {
	//data to send
	var data = {senderName: "Colin", message: message,
		    groupId: this.props.params.groupId};
        this.socket.emit('chat message', data);
    }

    connect(groupId) {
        return io().emit("join-room", groupId);
    }

    render() {

        return (
            <div>
		<h3>{this.state.groupName} Chat</h3>
		<ChatMessageContainer messages={this.state.messages} />
		<ChatMessageSender onSend={this.handleMessageSend.bind(this)} />
            </div>
        );
    }
}
