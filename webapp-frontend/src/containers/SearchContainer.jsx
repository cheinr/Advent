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
	    groups: []
	}
    }

    componentDidMount() {
	
	var url = `/api/group/query/${this.props.params.query}`;
	axios.get(url).then( (resp) => {
	    console.log(resp);
	    this.setState({groups: resp.data, loading: false});
	    console.log("groups" + this.state.groups);
	}).catch( function(error) {
	  console.log("error: " + error);
	});

    }

    render() {
	
	if(this.state.loading === true) {
	    return (
		<div>
		    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
		    <span className="sr-only">Loading...</span>
		</div>
	    );
	} else {
	    return (
		<SearchResults groups={this.state.groups} />
	    );
	}
    }
}
