import React from 'react';
import { StyleSheet, Text, View, CameraRoll, ScrollView } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { Constants } from "expo";


export default class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          photos: null
        };
    }
    
    render() {
        let { photos } = this.state;
        return (
          <View>
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