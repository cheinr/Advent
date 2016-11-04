import React from 'react';
import {withRouter} from 'react-router';
const SearchBar = withRouter(React.createClass( {

    onSearchSubmit: function() {
	console.log(this.refs.searchInput.value);
	this.props.router.replace(`/search/${this.refs.searchInput.value}`);
    },
    handleKeyPress: function(e) {
	if(e.key === "Enter") {
	    this.onSearchSubmit();
	}
    },
    
    render: function() {
	return (
	    <div className="col-sm-6 col-md-6">
		<div className="input-group">
		    <input type="text" id="searchInput" ref="searchInput" className="form-control" placeholder="search..." onKeyPress={this.handleKeyPress}></input>
		    <div className="input-group-btn">
			<button className="btn btn-default"><i className="glyphicon glyphicon-search" onClick={this.onSearchSubmit}></i></button>
		    </div>
		</div>
	    </div>
	)
    }
}));

export default SearchBar;
