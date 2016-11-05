import React from 'react';
import {Link} from 'react-router';

export default function UserSearchResult(props) {
    return (
	<div className="row">
	    <div className="col-md-2">
		<img className="img-thumbnail pull-right" src={props.user.pictureUrl} width="128" height="128"/>
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

