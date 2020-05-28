import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView, Row, Modal, TextInput, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FilmForm from './filmForm';
import FilmDetails from './filmDetails';

export default class filmList extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      search: '',
      films: [
        {
          title: 'Ricky And Morty',
          image: 'https://fr.web.img6.acsta.net/pictures/18/10/31/17/34/2348073.jpg',
          resume: 'Follow the adventure of Ricky and Morty !',
          comment: 'Powerfull',
          rate: '5',
          key: 1
        }
      ]
    }
  }

updateSearch = event => {
  this.setState({
    search: event.nativeEvent.text.substr(0,20)
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

addFilm = (form) => {

  var key = Math.random().toString();
  const obj = {title: form.title, image: form.image, resume: form.resume, comment: form.comment, rate: form.grade, key: key};
  this.setState({
    films: [...this.state.films, obj]
  })
  this.closeModal();
}

openParameters = () => {
  this.props.navigation.navigate('Parameter');
}


  render() {
    let filterfilm = this.state.films.filter(
      (film)=> {
        return film.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <View>
        <Modal visible={this.state.modalVisible}>
          <View style={{flex: 1}}>
          <TouchableOpacity style={styles.button}>
            <Button title='Close' Film onPress={this.closeModal}/>
          </TouchableOpacity>
          <FilmForm addFilm={this.addFilm}></FilmForm>
          </View>
        </Modal>

        <TouchableOpacity style={styles.button}>
          <Button title='Add Film' onPress={this.openModal}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Button title='Parameters' onPress={this.openParameters} />
        </TouchableOpacity>
        <TextInput  style={styles.input} value={this.state.search} onChange={this.updateSearch} placeholder=' Search film ...'/>
      <View>
      <ScrollView>
        {filterfilm.map((film, i) => (
          <View style={styles.item}>
          <Image key={film.key} source={{uri: film.image}} style={{ width: 200, height: 200 }} />
          <View style={styles.property}>
            <Text key={film.key}> Title : {film.title} </Text>
            <Text key={film.key}> Rate : {film.rate} / 5 </Text>
            <TouchableOpacity style={styles.button}>
              <Button title='See details' onPress={() => this.props.navigation.navigate('Details',{film : film})}/>
            </TouchableOpacity>
          </View>
          </View>
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
  input: {
    margin: 15,
    height: 40,
    borderColor: '#000',
    borderWidth: 1
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 5
  },
  property: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, button: {
     padding: 10,
     margin: 15,
     height: 40,
  }

});
