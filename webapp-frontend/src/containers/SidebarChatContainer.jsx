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

    openChat: function(e) {
	console.log(e.target);
	this.setState({
	    selectedGroup: e.target.id
	});
    },

    closeChat: function() {
	this.setState({
	    selectedGroup: null
	});
    },

    render: function() {


	console.log(this.state.selectedGroup);
        return (
	    <div className="">
		{
		((this.state.selectedGroup === null) &&
		(this.state.groups.map((group, id) =>
		
		<button key={id} id={id} onClick={this.openChat} className="btn btn-default btn-block">

			<div id={id} className="pull-left">
			    <p>{group.groupName}</p>
			</div>	
		</button>
		    
		    
		)))
		    
	    ||
		    
		    
		    ((this.state.selectedGroup !== null) &&
		     ( <button onClick={this.closeChat}
			       className="btn btn-default">
			     back
		     </button>))
		    
		}
		
		{   
		    (this.state.groups.map((group, id) => {
			return (
			    <GroupChat
				group={group}
				user={this.props.user}
				key={id}
				display={this.state.selectedGroup == id}
			    />
			);
		    }))
		}
		
	    </div>
        );
    }
    
}));

export default SidebarChatContainer;
