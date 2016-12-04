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
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this._signIn = this._signIn.bind(this);
    this._signOut = this._signOut.bind(this);
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

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
        />
    );
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/calendar'],
        webClientId: '867788377702-gmfcntqtkrmdh3bh1dat6dac9nfiiku1.apps.googleusercontent.com',
        offlineAccess: true
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({user});
    }
    catch(err) {
      console.log("Play services error", err.code, err.message);
    }
  }

  _signIn() {
    GoogleSignin.signIn()
        .then((user) => {
          console.log(user);
          this.setState({user: user});
        })
        .catch((err) => {
          console.log('WRONG SIGNIN', err);
        })
        .done();
  }

  _signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({user: null});
    })
        .done();
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec',
  },
});

AppRegistry.registerComponent('AdventMobile', () => AdventMobile);
