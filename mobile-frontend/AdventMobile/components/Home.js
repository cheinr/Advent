import React from 'react';

import {
    AppRegistry,
    Text,
    View,
    TouchableHighlight,
    Image,
    Picker,
    Button
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class Home extends React.Component {

    render() {
        return (
            <View>
                <GoogleSigninButton
                    style={{width: 48, height: 48}}
                    size={GoogleSigninButton.Size.Standard}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.props.login}/>
                <Button
                    onPress={this.props.login}
                    title="Login to Google"
                    color="black"
                />
                {this.props.authenticated ?
                    <View>
                        <Button
                            onPress={this.props.groupListPage}
                            title="View Groups"
                            color="black"
                        />
                        <Button
                            onPress={this.props.eventListPage}
                            title="View Events"
                            color="black"
                        />
                    </View>
                    : null}
            </View>
        );
    }
}