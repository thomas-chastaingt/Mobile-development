import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button
} from 'react-native';
import Expo from 'expo';
import * as Contacts from "expo-contacts";



export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: []
        }
    }
    
    componentDidMount() {
        this.retrieveContacts();
    }

    retrieveContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.FirstName],
            });
            this.setState({
                datas: data
            });
            
        }
    }
    render() {
        let contacts = this.state.datas
        console.log(contacts);
        return (
          <View>
            <ScrollView>
              {contacts.map((contact, i) => (
                <View style={styles.item}>
                  <Text>{contact.firstName}</Text>
                </View>
              ))}
            </ScrollView>
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
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        margin: 5
    }
});