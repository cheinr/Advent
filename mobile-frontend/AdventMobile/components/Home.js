import React from 'react';

import {
    AppRegistry,
    Text,
    View,
    TouchableHighlight,
    Image,
    Picker
} from 'react-native';

const MK = require('react-native-material-kit');

const {
    MKButton,
    MKColor,
} = MK;

MK.setTheme({
    primaryColor: '#7E57C2',
    accentColor: MKColor.Teal
});

export default class Home extends React.Component {
    render() {
        return (
            <View>
                <ColoredRaisedButton  />
            </View>
        );
    }
}