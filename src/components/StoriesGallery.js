import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, FlatList, Dimensions} from 'react-native';
import ProfilePicture from './ProfilePicture';
import Entypo from 'react-native-vector-icons/Entypo';

export default function StoriesGallery({navigation, route}) {
  const {pictures, pindex} = route.params;
  console.log('bekar gallery');
  const {height, width} = Dimensions.get('screen')
  return (
    <FlatList
      data={pictures}
      keyExtractor={(item) => item.login.uuid}
      initialScrollIndex={pindex}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <ProfilePicture
                uri={item.picture.thumbnail}
                size="small"
              />
              <Pressable onPress={() => navigation.navigate('Home')}>
                <Entypo name="cross" size={20} color="#000" />
              </Pressable>
            </View>
            <Image
              source={{uri:item.picture.large}}
              style={([StyleSheet.absoluteFillObject], {width: width, height: height})}
            />
          </View>
        );
      }}
    />
  );
}
