 import React from 'react';
import { StyleSheet,Text, View, Button } from 'react-native';
import { styles } from './../styleSheet';
 export default function Break(props) {


   function more(){
     props.BreakChange(props.break + 1);
   }
   function less() {
     const actualBreak = props.break;

     if(actualBreak === 0) {
       return
     }

     props.BreakChange(actualBreak - 1);
   }
   return(
     <View>
      <Text>Break time</Text>
      <View>
        <Button onPress = {more} title="Up"></Button>
        <Text>{props.break}</Text>
        <Button onPress = {less} title="Down"/>
      </View>
     </View>
   );
 }
