import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';




export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>Hello world Map</Text>
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