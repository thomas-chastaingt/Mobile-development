import React from 'react';
import { StyleSheet,Text, View, Button } from 'react-native';
import { styles } from './../styleSheet';
export default function Session(props) {



  function more(){
    props.SessionChange(props.session + 1);
  }
  function less() {
    const actualSession = props.session;

    if(actualSession === 0) {
      return
    }
    props.SessionChange(actualSession - 1);
  }

  return(
    <View>
      <View>
        <Text>Session time</Text>
     </View>
     <View>
       <Button onPress={more} title="Up"></Button>
       <Text>{props.session}</Text>
       <Button onPress={less} title="Down"></Button>
     </View>
    </View>
  );
}
