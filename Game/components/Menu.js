import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';




export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <Button style={styles.button} title = 'Contact' onPress = {() => this.props.navigation.navigate('Contact')}/>
                <Button style={styles.button} title='Picture' onPress={() => this.props.navigation.navigate('Picture')}/>
                <Button style={styles.button} title='Map' onPress={() => this.props.navigation.navigate('Maping')}/>
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
    button: {
        padding: 10,
        margin: 10,
        height: 40,
        borderRadius: 10,
    },
});