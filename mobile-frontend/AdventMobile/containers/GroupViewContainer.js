import React, { Component } from 'react';
import GroupView from './../components/GroupView';
import { StyleSheet, Image } from 'react-native';
var Platform = require('react-native').Platform;

export default class GroupListContainer extends Component {
    constructor(props) {

        super(props);

        this.state = {
            group: '',
        };
    }

    _fetchData(groupId) {

        fetch('url/groupId', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                result: result
            })
        })
            .then((response) => response.json())
            .then((responseData) => {

                this.setState({groups:responseData});
            })
            .done();
    }

    componentDidMount() {
        this._fetchData(this.props.groupId)
    }

    render() {
        return <GroupView
            group={this.state.group}
        />;
    }
}