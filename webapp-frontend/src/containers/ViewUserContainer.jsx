import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Panel from '../components/display/Panel';
import Thumbnail from '../components/display/Thumbnail';
import PageHeader from '../components/display/PageHeader';
import {Link} from 'react-router';

export default class ViewUserContainer extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    displayName: '',
	    description: '',
	    pictureUrl: '',
	};
    }

    componentWillReceiveProps(nextProps) {
	if(nextProps.params.userId !== this.props.params.userId) {
	    this.getUserInfo(nextProps.params.userId);
	}
    }
    
    componentWillMount() {	
	this.getUserInfo(this.props.params.userId);
    }

    getUserInfo(userId) {
	const url = `/api/users/id/${userId}`;
	axios.get(url)
	     .then((response) => {
		 this.setState({
		     displayName: response.data.displayName,
		     description: response.data.description,
		     pictureUrl: response.data.pictureUrl,
		 });
	     })
	     .catch((error) => {
		 console.log(error);
		 this.setState({
		     showErrors: true,
		     errorMessage: 'There was an error receiving the user from the server',
		 });
	     });

    }

    render() {
	var edit_button = "";
	if(this.props.user != null
	   && this.props.user.id == this.props.params.userId) {
	    edit_button = (
		<Link to={`/user/edit/${this.props.params.userId}`}>
		    <button type="button" className="btn btn-default">
			Edit</button>
		</Link>
	    );	
	} else {
	    edit_button = "";
	}

	return (
	    <div>
		{this.state.showErrors ? <Error>{this.state.errorMessage}</Error> : null}
		<div className="row pull-down">
		    <div className="col-xs-3">
			<Thumbnail pictureUrl={this.state.pictureUrl} altText="User" />
		    </div>
		    <div className="col-xs-9">
			<PageHeader title={this.state.displayName} />
		    </div>
		</div>
		<div className="row">
		    <Panel title="Description">
			<ReactMarkdown escapeHtml source={this.state.description} />
		    </Panel>
		</div>
		{edit_button}
		{/* TODO dszopa 10/18/16 - Display groups too */}
	    </div>
	);
    }
}
