import React from 'react';
import axios from 'axios';
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
	axios.get(`/api/group/query/${this.props.params.query}`).then((resp)=>{
	    console.log(resp);
	    this.setState({groups: resp.data});
	    console.log(this.state.groups);
	}).catch( (err) => {

	});
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
