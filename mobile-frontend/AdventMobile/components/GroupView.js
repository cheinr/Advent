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
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        const dataSource = ds.cloneWithRows(this.props.groups);
        return (
            <Text>
                Group Name: {this.props.group.groupName}

                Group Description: {this.props.group.groupName}
            </Text>
        );
    }
}