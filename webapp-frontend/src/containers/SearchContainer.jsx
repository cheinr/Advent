import React from 'react';

//TODO - rename to SearchResultsContainer
export default class SearchContainer extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    loading: true
	}
    }

    render() {
	if(this.state.loading) {
	    return (
		<div>
		    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
		    <span className="sr-only">Loading...</span>
		</div>
	    );
	} else {
	    return (
		<h1>Happy Searching!</h1>
	    );
	}
    }
}
