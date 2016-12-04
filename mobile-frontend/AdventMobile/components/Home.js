import React from 'react';

import {
    AppRegistry,
    Text,
    View,
    TouchableHighlight,
    Image,
    Picker,
    Button,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class Home extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={styles.button}>
                        <Button
                            onPress={this.props.groupListPage}
                            title="View Groups"
                            color="black"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            onPress={this.props.eventListPage}
                            title="View Events"
                            color="black"
                        />
                    </View>
                </ScrollView>
                <View style={styles.button}>
                    <Button
                        onPress={()=> this.props.signOut()}
                        title="Sign out"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        height: 50
    },
    signOut: {

    }
});