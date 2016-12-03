import React from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import {withRouter} from 'react-router';

import ChatMessageContainer from '../components/chats/chat-message-container';
import ChatMessageSender from '../components/chats/chat-message-sender';

/*
 *  Container meant to be the handler for /chat/group/:groupId
 */

const GroupChatContainer = withRouter(React.createClass( {
    getInitialState() {
	return { messages: [], groupName: '', loading: true };
    },

    componentDidMount() {
	this.socket = null;

	var url = `/api/group/${this.props.params.groupId}`;
	console.log("url: " + url);
	//check if group exists and get the name of the group.
	axios.get(url).then( (resp) => {
	    console.log(resp);
	    if(resp.data != "") {
		this.setState({groupName: resp.data.groupName, loading: false});
		this.socket = this.connect(this.props.params.groupId);
		this.socket.on('chat message', (msg) => {
		    var messages = this.state.messages;
		    messages.push(msg);
		    console.log(messages);
		    this.setState({messages: messages} );
		});
		this.render();
	    } else {
		//redirect user to main page if this one doesn't exist.
		    //TODO - redirect to previous page?
		this.props.router.replace("/");
		console.log("group doesn't exist");
	    }
	}).catch( function(error) {
	    console.log(error);
	});
    },

    handleMessageSend(message) {
	//data to send
	//TODO - get actual user name
	var data = {senderName: this.props.user.displayName, message: message,
		    groupId: this.props.params.groupId};
	this.socket.emit('chat message', data);
    },

    connect: function(groupId) {
	return io().emit("join-room", groupId);
    },
    render() {
	if (this.state.loading) {
	    return (
		<div>
		    <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
		    <span className="sr-only">Loading...</span>
		</div>
	    );
	} else {
	    return (
		<div>
		    <h3>{this.state.groupName} Chat</h3>
		    <ChatMessageContainer messages={this.state.messages} />
		    <ChatMessageSender onSend={this.handleMessageSend} />
		</div>
	    );
	}
    }
}));

export default GroupChatContainer;
