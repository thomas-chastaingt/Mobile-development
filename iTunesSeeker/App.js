import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/SearchComponent';
import Favourite from './components/FavouriteComponent';
import Detail from './components/DetailComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Favourite" component={Favourite} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
