import React, { Component } from 'react';
import GroupView from './../components/GroupView';
import { StyleSheet, Image } from 'react-native';
var Platform = require('react-native').Platform;

export default class GroupViewContainer extends Component {
    constructor(props) {

        super(props);
    }

    render() {
        return <GroupView
            group={this.props.group}
        />;
    }
}