import React from 'react';
import {View, Text} from 'react-native';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

export default function Post({item}) {
  return (
    <View style={{marginVertical: 10}} >
      <Header uri={item.picture.medium} name={item.name.first} />
      <Body uri={item.picture.large} />
      <Footer />
    </View>
  );
}
