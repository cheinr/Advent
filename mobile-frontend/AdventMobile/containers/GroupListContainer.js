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

    _fetchData(userEmail) {
        fetch('http://proj-309-la-03.cs.iastate.edu/api/auth/group/my-groups/' + userEmail, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseData) => {

                this.setState({groups:responseData});
            })
            .done();
    }

    groupPage(group) {

        this.props.toRoute({
            name: "Group",
            component: GroupViewContainer,
            passProps: {
                group: group,
            }
        });
    }

    componentDidMount() {
        this._fetchData(this.props.user.email)
    }

    render() {
        return <GroupList
            groups={this.state.groups}
            groupPage={this.groupPage}
        />;
    }
}