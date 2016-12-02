import React from 'react';
import axios from 'axios';
import Navbar from '../containers/Navbar';
import Sidebar from './Sidebar';


export default class MainLayout extends React.Component {
    constructor(props) {
	super(props);
	this.state = { user: null };
    }

    componentDidMount() {
	console.log("main layout");
	axios.get('/api/users/current').then((resp) => {
	    console.log(resp);
	    this.setState({ user: resp.data });
	}).catch((error) => {
	    console.log(error);
	});
    }

    render() {
	var children = null;
	var sidebar = null;
	console.log("rendering");
	// this gives children access to user property
	if(this.state.user === null) {
	    children = (
		<div className="loading-centered">
		    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
		    <span className="sr-only">Loading...</span>
		</div>
	    );
	} else {
	    children = React.cloneElement(this.props.children,
					  { user: this.state.user });
	    sidebar = <Sidebar user={this.state.user} />;
	}

	return (
	    <div className="padded-top">
		<Navbar />
		<div className="container-fluid">
		    <div className="col-xs-9">
			<div>
			    {children}
			</div>
		    </div>
		    <div className="sidebar sidebar-well">
			{sidebar}
		    </div>
		</div>
	    </div>
	    
	);
    }
}
