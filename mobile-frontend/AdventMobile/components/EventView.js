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
            <Text style={styles.view}>
                <Text style={styles.title}>Event Name: </Text>
                {this.props.event.name}
                {"\n"}
                <Text style={styles.title}>Description: </Text>
                {this.props.event.description}
                {"\n"}
                <Text style={styles.title}>Start Date: </Text>
                {this.props.event.startDate}
                {"\n"}
                <Text style={styles.title}>End Date: </Text>
                {this.props.event.endDate}
                {"\n"}
                <Text style={styles.title}>Location: </Text>
                {this.props.event.location}
            </Text>
        );
    }
}

var styles = StyleSheet.create({
    view: {
        padding: 10
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