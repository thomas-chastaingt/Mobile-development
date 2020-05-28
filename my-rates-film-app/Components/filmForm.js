import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class filmForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: null,
      resume: '',
      comment: '',
      grade: null,
      isFormValid: false
    }
  }


  onHandleNameChange = name => {
      this.setState({
        title: name
      });
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };


  onHandleChoosePhoto = async () => {
    try {
     let result = await ImagePicker.launchImageLibraryAsync({
       mediaTypes: ImagePicker.MediaTypeOptions.All,
       allowsEditing: true,
       aspect: [4, 3],
       quality: 1,
     });
     if (!result.cancelled) {
       this.setState({ image: result.uri });
     }

     console.log(result);
   } catch (E) {
     console.log(E);
   }
 }

onHandleResumeChange = resume => {
 this.setState({
   resume: resume
 });
}

onHandleCommentChange = comment => {
 this.setState({
   comment: comment
 })
}

onHandleGradeChange = grade => {
 this.setState({
   grade: grade
 })
}

onHandleSubmit = () => {
  if (this.state.title.length > 0 && this.state.image != null && this.state.resume.length > 0
    && this.state.comment.length > 0 && this.state.grade != null && this.state.grade <= 5) {
      this.props.addFilm(this.state);
  }

}

  render() {
     let { image } = this.state;
    return (

      <View style={styles.container}>
        <Text style={styles.txt}>New film</Text>
        <TextInput style={styles.input} value={this.state.name} onChangeText={this.onHandleNameChange} placeholder=" Title..."/>
        <TouchableOpacity style={styles.button}><Button title=' Choose an image ...' onPress={this.onHandleChoosePhoto}/></TouchableOpacity>
        {<Image source={{ uri: image }} style={{ width: 100, height: 100, padding: 10,margin: 15,}} />}
        <TextInput style={styles.input} value={this.state.resume} onChangeText={this.onHandleResumeChange} placeholder=" Resume..."/>
        <TextInput style={styles.input} value={this.state.comment} onChangeText={this.onHandleCommentChange} placeholder=" Comment..."/>
        <TextInput style={styles.input} value={this.state.grade} onChangeText={this.onHandleGradeChange} keyboardType='numeric' placeholder=" Rating (1-5)"/>
        <TouchableOpacity style={styles.button}><Button title=' Add film' onPress={ this.onHandleSubmit}/></TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#000',
    borderWidth: 1
  },
  txt: {
    fontSize: 30,
    padding: 10,
    margin: 5,
  },
  button: {
    padding: 10,
    margin: 5,
    height: 40,
  }
});
