import React from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import {withRouter} from 'react-router';

import GroupChat from '../components/chats/group-chat.jsx';
/*
 *  Container meant to be the handler for /chat/group/:groupId
 *  You must give it access to the router in props. (Trying to change this)
 *  (Call withRouter(GroupChatContainer))
 */

const SidebarChatContainer = withRouter(React.createClass( {
    getInitialState() {
	return {
	    groups: [],
	    selectedGroup: null
	};
    },

    componentDidMount : function() {
	console.log("WHat a bunch of bullshit");
	this.socket = null;

	var url = `/api/group/user/${this.props.user.id}`;

	//check if group exists and get the name of the group.
	axios.get(url).then( (resp) => {
	    console.log(resp);
	    this.setState({
		groups: resp.data
	    });
	    this.render();
	}).catch( function(error) {
	    console.log(error);
	});
    },

    render: function() {

	if(this.state.selectedGroup !== null) {
	    <div className="sidebar-chat">
		<GroupChat
		    group={this.state.selectedGroup}
		    user={this.props.user}
		/>
	    </div>
	} else {
	    console.log(this.state.groups);
            return (
		<div className="sidebar-chat-groups">
		    {this.state.groups}
		</div>
            );
	}
    }
}));
             
export default SidebarChatContainer;
