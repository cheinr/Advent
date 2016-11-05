import React from 'react';
import {Link} from 'react-router';

export default function GroupSearchResult(props) {
    return (
	<div className="row">
	    <div className="col-md-1">
		<img src={props.group.groupPictureUrl} />
	    </div>
	    <div className="col-md-8">
		<Link>{props.group.groupName}</Link>
		<p>{props.group.description}</p>
	    </div>
	</div>
    );
}

