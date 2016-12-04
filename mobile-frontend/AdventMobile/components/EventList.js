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
            <TouchableHighlight onPress={() => this.eventPage(rowData)}>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            {rowData.name}
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
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    thumb: {
        width: 64,
        height: 64,
    },
    text: {
        flex: 1,
    },
});