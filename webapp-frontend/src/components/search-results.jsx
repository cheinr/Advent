import React from 'react';
import GroupSearchResult from "./group-search-result";
import UserSearchResult from "./user-search-result";

export default class SearchResults extends React.Component {

    render() {
	var group_results = [];
	var user_results = [];
	this.props.groups.forEach( function(group) {
	    group_results.push(<GroupSearchResult group={group} key={group.id}/>);
	});
	this.props.users.forEach( function(user) {
	    user_results.push(<UserSearchResult user={user} key={user.id}/>);
	});
	var user_label;
	var group_label;
	if(user_results.length != 0) {
	    user_label = <b>Users:</b>;
	} else {
	    user_label = "";
	}
	if(group_results.length != 0) {
	    group_label = <b>Groups:</b>;
	} else {
	    group_label = "";
	}
	
	return (
	    <div>
		{group_label}
		{group_results}
		{user_label}
		{user_results}
	    </div>
	);

    }
}
