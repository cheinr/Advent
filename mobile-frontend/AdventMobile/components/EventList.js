import React from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class EventList extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            groups: []
        };
        this._renderRow = this._renderRow.bind(this)
    }

    _renderRow(rowData) {
        return (
            <TouchableHighlight onPress={() => this.props.eventPage(rowData)}>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.title}>
                            {rowData.name}
                        </Text>
                        <Text>
                            {"\n"}
                        </Text>
                        <Text style={styles.text}>
                            {rowData.description}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        const dataSource = ds.cloneWithRows(this.props.events);
        return (
            <ListView
                dataSource={dataSource}
                renderRow={this._renderRow}
            />
        );
    }
}

var styles = StyleSheet.create({
    row: {
        padding: 10,
        height: 100,
        backgroundColor: '#F6F6F6',
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    thumb: {
        width: 64,
        height: 64,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    text: {
    },
});