import React, { Component } from 'react';
import GroupList from './../components/GroupList';
import GroupViewContainer from './GroupViewContainer';
import { StyleSheet, Image } from 'react-native';
var Platform = require('react-native').Platform;

export default class GroupListContainer extends Component {
    constructor(props) {

        super(props);

        this.state = {
            groups: []
        };
        this.groupPage = this.groupPage.bind(this)
    }

    _fetchData() {

        this.setState({groups:[
            {
                id: 1,
                groupName: "name",
                descrition: "description"
            }
        ]});
        // fetch('url', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     }
        // })
        //     .then((response) => response.json())
        //     .then((responseData) => {
        //
        //         this.setState({groups:responseData});
        //     })
        //     .done();
    }

    groupPage(groupId) {

        this.props.toRoute({
            name: "Group",
            component: GroupViewContainer,
            passProps: {
                groupId: groupId,
            }
        });
    }

    componentDidMount() {
        this._fetchData()
    }

    render() {
        return <GroupList
            groups={this.state.groups}
            groupPage={this.groupPage}
        />;
    }
}