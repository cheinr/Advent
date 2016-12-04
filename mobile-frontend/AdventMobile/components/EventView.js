import React from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class EventView extends React.Component {

    render() {
        return (
            <Text>
                Group Name: {this.props.event.name}
                {"\n"}
                Description: {this.props.event.description}
            </Text>
        );
    }
}