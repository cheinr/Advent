import React, { Component } from 'react';
import Home from '../components/Home';
import { StyleSheet, Picker } from 'react-native';
var Platform = require('react-native').Platform;
import GroupListContainer from './GroupListContainer';
import EventListContainer from './EventLIstContainer';

export default class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
        };
        this.login = this.login.bind(this);
        this.groupListPage = this.groupListPage.bind(this);
        this.eventListPage = this.eventListPage.bind(this);
    }

    login() {
        this.setState({authenticated: true});
    }

    groupListPage() {

        this.props.toRoute({
            name: "Group List",
            component: GroupListContainer
        });
    }

    eventListPage() {

        this.props.toRoute({
            name: "Event List",
            component: EventListContainer
        });
    }

    render() {
        return <Home
            login={this.login}
            groupListPage={this.groupListPage}
            eventListPage={this.eventListPage}
            authenticated={this.state.authenticated}
        />
    }
}

const fontFamily = Platform.OS === 'ios' ? "HelveticaNeue-CondensedBold" : 'impact';
const styles = StyleSheet.create({

});