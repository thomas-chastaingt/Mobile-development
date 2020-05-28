import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function filmDetails({route}){
    const { film } = route.params;
    const title = JSON.stringify(film.title);
    const image = JSON.stringify(film.image);
    const resume = JSON.stringify(film.resume);
    const comment = JSON.stringify(film.comment);
    const rate = JSON.stringify(film.rate);
    const key = JSON.stringify(film.key);

    return (
      <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center'}}>
        <Text style={{padding: 15, margin:5, fontSize: 20}} key={key}>Title : {title} </Text>
        <Image key={key} source={{uri: film.image}} style={{ width: 200, height: 200 }} />
        <Text style={{padding: 15, margin:5, fontSize: 15}} key={key}>Comment : {comment} </Text>
        <Text style={{padding: 15, margin:5, fontSize: 15}} key={key}>Resume : {resume} </Text>
        <Text style={{padding: 15, margin:5, fontSize: 20}} key={key}>Rate : {rate} / 5 </Text>
      </View>
    )

}
