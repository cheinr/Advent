import React from 'react';
import axios from 'axios';

import SearchResults from '../components/search-results';
import GroupSearchResult from '../components/group-search-result';
//TODO - rename to SearchResultsContainer
export default class SearchContainer extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    loading: true,
	    groups: [],
	    users: [],
	    no_users: false,
	    no_groups: false
	}
    }

    componentDidMount() {

	var query = this.props.params.query;
	if(query === " ") query = "%";
	var url = `/api/group/query/${query}`;
	axios.get(url).then( (resp) => {
	    if(resp.data.length != 0) {
		this.setState({groups: resp.data, loading: false});
		console.log("groups" + this.state.groups);
	    } else {
		this.setState({no_groups: true});
	    }
	}).catch( function(error) {
	  console.log("error: " + error);
	});

	url = `/api/users/query/${query}`;
	axios.get(url).then( (resp) => {
	    if(resp.data.length != 0) {
		this.setState({users: resp.data, loading: false});
	    } else {
		this.setState({no_users: true});
	    }
	}).catch( function(error) {
	    console.log("error: " + error);
	});
    }

    render() {


	if (this.state.no_users && this.state.no_groups ){
	    return (
		<div>
		    <p>No results found for {this.props.params.query}. =[</p>
		</div>
	    );
	} else if(this.state.loading === true) {
	    return (
		<div>
		    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
		    <span className="sr-only">Loading...</span>
		</div>
	    );
	} else {
	    return (
		<SearchResults
		groups={this.state.groups}
		users={this.state.users}
		/>
	    );
	}
    }
}
