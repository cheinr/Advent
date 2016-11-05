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
	this.queryBackend(this.props.params.query);
    }

    componentWillReceiveProps(nextProps) {
	console.log("new props: " + nextProps.params.query);
	if(nextProps.params.query !== this.props.params.query) {
	    this.setState({
		loading: true,
		groups: [],
		users: [],
		no_users: false,
		no_groups: false
	    });
	    this.queryBackend(nextProps.params.query);
	}
    }

    queryBackend(queryString) {
	var query = queryString;
	if(query === " ") query = "%";
	var url = `/api/group/query/${query}`;
	axios.get(url).then( (resp) => {
	    if(resp.data.length != 0) {
		this.setState({groups: resp.data, loading: false});
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
