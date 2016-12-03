import React, { Component } from 'react';
import GroupView from './../components/GroupView';
import { StyleSheet, Image } from 'react-native';
var Platform = require('react-native').Platform;

export default class GroupViewContainer extends Component {
    constructor(props) {

        super(props);

        this.state = {
            group: '',
        };
    }

    _fetchData(groupId) {
        this.setState({group:{
            id: 1,
            groupName: "name",
            description: "description"
        }});
        // fetch('url/groupId', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         result: result
        //     })
        // })
        //     .then((response) => response.json())
        //     .then((responseData) => {
        //
        //         this.setState({group:responseData});
        //     })
        //     .done();
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