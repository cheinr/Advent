import React, { Component } from 'react';
import Home from '../components/Home';
import { StyleSheet, Picker } from 'react-native';
var Platform = require('react-native').Platform;

export default class HomeContainer extends Component {
    constructor() {
        super();
        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {

    }

    render() {
        return <Home/>
    }
}

const fontFamily = Platform.OS === 'ios' ? "HelveticaNeue-CondensedBold" : 'impact';
const styles = StyleSheet.create({

});