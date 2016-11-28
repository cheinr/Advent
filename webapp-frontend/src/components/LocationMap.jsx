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

    render() {
        return (
            <div className="padded-bottom">
                <h3>Area Map</h3>
		<div id="areaMap">Loading...</div>
            </div>
        );
    }
}
