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

// const MK = require('react-native-material-kit');
//
// const {
//     MKButton,
//     MKColor,
// } = MK;
//
// MK.setTheme({
//     primaryColor: '#7E57C2',
//     accentColor: MKColor.Teal
// });

export default class Home extends React.Component {

    render() {
        return (
            <View>
                <Button
                    onPress={this.props.login}
                    title="Login to Google"
                    color="black"
                    accessibilityLabel="Learn more about this purple button"
                />
                {this.props.authenticated ? <Text>Logged in</Text> : null}
            </View>
        );
    }
}