import React from "react";
import { StyleSheet, Text } from 'react-native';

export default class BackButton extends React.Component {
    render() {
        return (
            <Text style={styles.backButtonText}>{"<"}</Text>
        );
    }
}

const styles = StyleSheet.create({
    backButtonText: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        marginLeft: 10,
        marginTop: 3,
        marginRight: 10,
    }
});