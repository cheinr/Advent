import React from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class GroupList extends React.Component {

    render() {
        return (
            <Text>
                Group Name: {this.props.group.groupName}

                Group Description: {this.props.group.description}
            </Text>
        );
    }
}