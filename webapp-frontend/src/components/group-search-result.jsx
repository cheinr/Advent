import React from 'react';
import {Link} from 'react-router';

export default function GroupSearchResult(props) {
    return (
	<div className="row">
	    <div className="col-md-2">
		<img className="img-thumbnail pull-right" src={props.group.groupPictureUrl} width="128" height="128"/>
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

