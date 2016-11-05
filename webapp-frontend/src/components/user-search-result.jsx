import React from 'react';
import {Link} from 'react-router';

export default function UserSearchResult(props) {
    return (
	<div className="row">
	    <div className="col-md-1">
		<img className="img-thumbnail" src={props.user.pictureUrl} width="100" height="100"/>
	    </div>
	    <div className="col-md-8">
		<Link to={`/user/${props.user.id}`}>
		    <b>{props.user.displayName}</b>
		</Link>
		<p>{props.user.description}</p>
	    </div>
	</div>
    );
}

