import React from 'react';
import UpcomingEventsContainer from '../containers/UpcomingEventsContainer';
import SidebarChatContainer from '../containers/SidebarChatContainer';


export default class SideBarContainer extends React.Component {
    constructor(props) {
	super(props);
    }
    
    render() {
	console.log(this.props);
	return (
	    <div className="panel-group" id="accordian">
		<div className="panel panel-default" >
		    <div className="panel-heading">
			<h4 className="panel-title">
			    <a data-toggle="collapse"
			       data-parent="#accordian" href="#collapse1">
				Upcoming Events
			    </a>
			</h4>
		    </div>
		    <div id="collapse1" className="panel-collapse collapse in">
			<div className="panel-body">
			    <UpcomingEventsContainer />
			</div>
		    </div>
		</div>

		<div className="panel panel-default" >
		    <div className="panel-heading">
			<h4 className="panel-title">
			    <a data-toggle="collapse"
			       data-parent="#accordian" href="#collapse2">
				Chats
			    </a>
			</h4>
		    </div>
		    <div id="collapse2" className="panel-collapse collapse">
			<div className="panel-body">
			    {this.props.user !== null &&
			     <SidebarChatContainer user={this.props.user}/>
			    }
			</div>

		    </div>
		</div>
	    </div>
	);
    }
}
