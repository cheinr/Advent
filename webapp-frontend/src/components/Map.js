import React, { Component } from 'react';

export default class Map extends Component {

    componentDidMount() {
        var map = new google.maps.Map(document.getElementById('areaMap'), {
            center: {lat: -34.397, lng: 150.644},
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