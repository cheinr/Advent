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
            component: GroupListContainer,
            passProps: {
                user: this.props.user
            }
        });
    }

    eventListPage() {

        this.props.toRoute({
            name: "Event List",
            component: EventListContainer,
            passProps: {
                user: this.props.user
            }
        });
    }

    render() {
        return <Home
            login={this.login}
            groupListPage={this.groupListPage}
            eventListPage={this.eventListPage}
            authenticated={this.state.authenticated}
            user={this.props.user}
            signOut={this.props.signOut}
        />
    }
}

const fontFamily = Platform.OS === 'ios' ? "HelveticaNeue-CondensedBold" : 'impact';
const styles = StyleSheet.create({
    button: {
        margin: 10,
        height: 30
    }
});