import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    Image,
    Modal
} from 'react-native';
import Toast from "react-native-simple-toast";
import Favourite from './FavouriteComponent';
export default class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            favourites: [],
            track: '',
            artist: '',
            search: '',
            results :  []
        }
    }
    componentDidMount() {
        this.fetchDataArtist();
    }
    fetchDataArtist = async () => {
        const response = await fetch("https://itunes.apple.com/search?term=" + this.state.artist);
        const result = await response.json()
        this.setState({
            results: result.results
        });
    }
    onHandleArtistChange = artist => {
        this.setState({
            artist: artist
        });
    }
    openModal = () => {
       this.setState({
           modalVisible: true
       })
    }

    closeModal = () => {
       this.setState({
           modalVisible: false
       })
    }


    render() {
        let datas = this.state.results;
        return ( 
        <View>
            <Modal visible={this.state.modalVisible}>
                <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button}>
                    <Button title='Close' Film onPress={this.closeModal}/>
                </TouchableOpacity>
                <Favourite favourite={this.state.favourites}></Favourite>
                </View>
            </Modal>
            <View>
                <View>
                <TouchableOpacity>
                    <Button title = "See my favourite" style = {styles.button} onPress = {this.openModal}/></TouchableOpacity >
                    <TextInput style={styles.input} value={this.state.artist} onChangeText={this.onHandleArtistChange} placeholder=' Search in iTunes database... ' />
                    <TouchableOpacity TouchableOpacity ><Button title="Search" style = {styles.button} onPress = {this.fetchDataArtist}/></TouchableOpacity >
                </View>
            </View>
            <View>
                <ScrollView>
                    {datas.map((data, i) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {data: data})}>
                            <View style={styles.item}>
                                <Image source={{uri: data.artworkUrl100}} style={{ width: 200, height: 200 }} />
                            <View>
                                <Text> Title : {data.trackCensoredName} </Text>
                                <Text> Album : {data.collectionName}</Text>
                                <Button style={styles.button} onPress={() => {
                                    this.setState({
                                        favourites: [...this.state.favourites, data]
                                    })
                                    Toast.show("Your music have been saved in your favourite ;) !");
                                }} title='Love it'/>
                            </View>
                            </View>
                        </TouchableOpacity>
                     ))}
                </ScrollView>
            </View>
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
    },
     button: {
            padding: 10,
            margin: 10,
            height: 40,
            borderRadius: 10,
     },
      input: {
          margin: 15,
          height: 40,
          borderColor: '#000',
          borderWidth: 1
      }
});
