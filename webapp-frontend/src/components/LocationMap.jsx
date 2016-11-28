import React, { Component } from 'react';

export default class LocationMap extends Component {

    componentDidMount() {
        var map = new google.maps.Map(document.getElementById('areaMap'), {
            center: {lat: this.props.lat, lng: this.props.lng},
            zoom: 8
        });
    }

    render() {
        return (
            <div>
                <h3>Area Map</h3>
                <div id="areaMap">Loading...</div>
            </div>
        );
    }
}
