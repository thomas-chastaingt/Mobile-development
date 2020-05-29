import React from 'react';
import { StyleSheet, Text, View, CameraRoll, ScrollView } from "react-native";


export default class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          photos: null
        };
    }
    
    render() {
        return (
          <View style={styles.container}>
            <Text>hello picture</Text>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});