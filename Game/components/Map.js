import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image
} from 'react-native';
import MapView from "react-native-maps";
import * as Contacts from "expo-contacts";


export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          image:"https://lemagdesanimaux.ouest-france.fr/images/dossiers/2020-03/lion-072718.jpg",
          index: null,
          coordonate: {
            latitude: 37.78825,
            longitude: -122.4324,
          },
          contactUse: null,
          contactFinalName: "Georges Michael",
          description:
            "Invente une histoire en fonction du pays, du nom, et de l'image du marker",
          contact: [],
        };
    }

    
    componentDidMount(){
      this.playGame();
    }

    playGame = async () => {
      const {status} = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const {data} = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName],
        });
        this.setState({
          contact: data
        });
            var index = Math.round(Math.random() * (50 - 1) + 1);
            this.setState({
              index: index,
            });
            const dataContact = this.state.contact;
            const contact = dataContact[index];
            this.setState({
              contactUse: contact,
            });
            const newFirsName = this.state.contactUse.firstName;
            this.setState({
              contactFinalName: newFirsName,
            });

            var lat = Math.random() * (90 - -90) + -90;
            var long = Math.random() * (180 - -180) + -180;
            const obj = { latitude: lat, longitude: long };
            this.setState({
              coordonate: obj,
            });
      }
    }
    render() {
        return (
          <View style={{ flex: 1 }}>
            <Button title="Replay !" onPress={this.playGame} />
            <MapView style={{ flex: 1 }} provider={MapView.PROVIDER_GOOGLE}>
              <MapView.Marker
                coordinate={this.state.coordonate}
                title={this.state.contactFinalName}
                description={this.state.description}
              >
                <Image source={{uri: this.state.image}} style={{ width: 50, height: 50 }} />
              </MapView.Marker>
            </MapView>
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