import React, { Component } from 'react';
import Home from '../components/Home';
import { StyleSheet, Picker } from 'react-native';
var Platform = require('react-native').Platform;

export default class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
        };
        this.login = this.login.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    login() {
        this.setState({authenticated: true});
    }

    nextPage() {

    }

    render() {
        return <Home
            login={this.login}
            authenticated={this.state.authenticated}
        />
    }
}

const fontFamily = Platform.OS === 'ios' ? "HelveticaNeue-CondensedBold" : 'impact';
const styles = StyleSheet.create({

});