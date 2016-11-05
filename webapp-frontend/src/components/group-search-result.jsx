import React from 'react';
import {Link} from 'react-router';

export default function GroupSearchResult(props) {
    return (
	<div className="row search-result">
	    <div className="col-md-1">
		<img className="img-thumbnail" src={props.group.groupPictureUrl} width="128" height="128"/>
	    </div>
	    <div className="col-md-8">
		<Link to={`/group/${props.group.id}`}>
		    <b>{props.group.groupName}</b>
		</Link>
		<p>{props.group.description}</p>
	    </div>
	</div>
    );
}

