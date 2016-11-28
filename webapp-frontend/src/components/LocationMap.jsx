import React, { Component } from 'react';

export default class LocationMap extends Component {

    componentDidMount() {
	var loc = {lat: this.props.lat, lng: this.props.lng};
        var map = new google.maps.Map(document.getElementById('areaMap'), {
            center: {lat: this.props.lat, lng: this.props.lng},
            zoom: 15
        });
	var marker = new google.maps.Marker({
	    position: loc,
	    map: map
	});
    }

    componentWillReceiveProps(newProps) {
	var loc = {lat: newProps.lat, lng: newProps.lng};
	if(newProps.lat !== this.props.lat || newProps.lng !== this.props.lng) {
	    var map = new google.maps.Map(document.getElementById('areaMap'), {
		center: {lat: newProps.lat, lng: newProps.lng},
		zoom: 15
            });
	    var marker = new google.maps.Marker({
		position: loc,
		map: map
	    });
	}
    }

    render() {
        return (
            <div className="padded-bottom">
                <h3>Location Map</h3>
		<div id="areaMap">Loading...</div>
            </div>
        );
    }
}
