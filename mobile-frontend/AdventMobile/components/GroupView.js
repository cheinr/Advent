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
            <View>

                <Image
                    source={this.props.group.groupPictureUrl}
                />
                <Text style={styles.view}>
                    <Text style={styles.title}>Group Name: </Text>
                    {this.props.group.groupName}
                    {"\n"}
                    <Text style={styles.title}>Group Description: </Text>
                    {this.props.group.description}
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    view: {
        padding: 10,
    },
    thumb: {
        width: 64,
        height: 64,
    },
    title: {
        fontWeight: 'bold',
    },

    text: {
    },
});