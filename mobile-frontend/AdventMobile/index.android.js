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
import BackButton from './components/BackButton';

export default class AdventMobile extends Component {
  render() {
    // TODO authenticate with database before passing in route
    const firstRoute = {
      name: "Welcome",
      component: HomeContainer
    };
    return (
        <Router
            firstRoute={firstRoute}
            headerStyle={styles.header}
            titleStyle={styles.title}
            backButtonComponent={BackButton}
        />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec',
  },
  title: {
    textAlign: "center",
  }
});

AppRegistry.registerComponent('AdventMobile', () => AdventMobile);
