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

export default class FavouriteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favourites: []
        }   
    }

    componentDidMount() {
        this.getFavorite();
    }

    getFavorite = async () => {
        const obj = this.props.favourite;
        await this.setState({
            favourites: obj
        })
    }
    render() {
        let datas = this.state.favourites;
        return(
            <View style={styles.container}>
                <ScrollView>
                    {datas.map((data, i) => (
                            <View style={styles.item}>
                                <Image source={{uri: data.artworkUrl100}} style={{ width: 200, height: 200 }} />
                            <View>
                                <Text> Title : {data.trackCensoredName} </Text>
                                <Text> Album : {data.collectionName}</Text>
                            </View>
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
    },
});