import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import HomeContainer from './containers/HomeContainer'
import Router from 'react-native-simple-router';

export default class AdventMobile extends Component {
  render() {
    // TODO authenticate with database before passing in route
    // const firstRoute = {
    //   name: "Home",
    //   component: HomeContainer
    // };
    // return (
    //     <Router
    //         firstRoute={firstRoute}
    //     />
    // );
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AdventMobile', () => AdventMobile);
