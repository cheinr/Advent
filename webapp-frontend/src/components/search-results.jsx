import React from 'react';
import GroupSearchResult from "./group-search-result";

export default class SearchResults extends React.Component {

    render() {
	var results = [];
	this.props.groups.forEach( function(group) {
	    results.push(<GroupSearchResult group={group} key={group.id}/>);
	});
	return (
	    <div>
		{results}
	    </div>
	);

    }
}
