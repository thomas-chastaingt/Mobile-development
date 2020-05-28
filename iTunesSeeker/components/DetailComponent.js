import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

export default function Detail({route}) {
        const { data } = route.params;

        function test() {
            console.log(data);
        }
        return ( 
           <View style={styles.container}>
                <Text style={styles.text}> Title : {data.trackCensoredName}</Text>
                <Image source={{uri: data.artworkUrl100}} style={{ width: 300, height: 300 }}/>
                <Text style={styles.text}> Artist : {data.artistName}</Text>
                <Text style={styles.text}> Album : {data.collectionName}</Text>
                <Text style={styles.text}> Price : {data.collectionPrice} €</Text>
           </View>
        );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    text:{
            padding: 15,
            margin: 5,
            fontSize: 20
        }
    
});