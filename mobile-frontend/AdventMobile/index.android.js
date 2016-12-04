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

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

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
      component: HomeContainer,
        passProps: {
          user: this.state.user,
            signOut: this._signOut
        }
    };
    if (!this.state.user)
      return (
          <GoogleSigninButton
              style={{width: 230, height: 48}}
              size={GoogleSigninButton.Size.Standard}
              color={GoogleSigninButton.Color.Dark}
              onPress={this._signIn}/>
          );
    if (this.state.user)
        return (
            <Router
                firstRoute={firstRoute}
                headerStyle={styles.header}
                titleStyle={styles.title}
                backButtonComponent={BackButton}
            />
        );
  }


  async _setupGoogleSignin() {
    try {
      await GoogleSignin.configure({

          scopes: ['https://www.googleapis.com/auth/plus.login'],
        webClientId: '210674859854-hb6e8mjh6vpd9996v3v47ffl86m1r59i.apps.googleusercontent.com',
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
  title: {
    textAlign: "center",
  }
});

AppRegistry.registerComponent('AdventMobile', () => AdventMobile);
