import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image } from 'react-native';


export default class filmForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pseudo: "admin",
      password: "admin",
      typePseudo: "",
      typePassword: ""
    }
  }

onHandleConnect = () => {
  if(this.state.typePseudo === this.state.pseudo && this.typePassword === this.password) {
    const value = null;
    this.props.navigation.navigate('Home',{state: value});
  }
}

onHandlePseudo = pseudo => {
 this.setState({
   typePseudo: pseudo
 })
}

onHandlePassword = password => {
 this.setState({
   typePassword: password
 })
}


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>My Films</Text>
        <TextInput style={styles.input} value={this.state.typePseudo} onChangeText={this.onHandlePseudo} placeholder=" Username ..."/>
        <TextInput secureTextEntry={true} style={styles.input} value={this.state.typePassword} onChangeText={this.onHandlePassword} placeholder=" Password ..."/>
        <TouchableOpacity style={styles.button}><Button title='Log In' onPress={this.onHandleConnect}/></TouchableOpacity>
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
  },
  button: {
    padding: 10,
    margin: 5,
    height: 40,
  }
});
