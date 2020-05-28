import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import filmDetails from './Components/filmDetails';
import filmForm from './Components/filmForm';
import filmList from './Components/filmList';
import login from './Components/login';
import parameter from './Components/filmParameter';

const Stack = createStackNavigator();


export default class App extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={login} />
          <Stack.Screen name="Home" component={filmList} />
          <Stack.Screen name="Details" component={filmDetails} />
          <Stack.Screen name="Form" component={filmForm} />
          <Stack.Screen name="Parameter" component={parameter} />
        </Stack.Navigator>
      </NavigationContainer>
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
