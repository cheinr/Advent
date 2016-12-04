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

export default class Home extends React.Component {

    render() {
        return (
            <View>
                <View>
                    <Button
                        onPress={()=> this.props.signOut()}
                        title="Sign out"
                    />
                    <Button
                        onPress={this.props.groupListPage}
                        title="View Groups"
                        color="black"
                    />
                    <Button
                        onPress={this.props.eventListPage}
                        title="View Events"
                        color="black"
                    />
                    <Text>
                        {JSON.stringify(this.props.user)}
                    </Text>
                </View>
            </View>
        );
    }
}