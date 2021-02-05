import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ProfilePicture from './ProfilePicture';
import styles from './styles';

export default function Stories() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const apiurl = "https://randomuser.me/api/?results=50"
    const fetchdata = async () => {
      const result = await fetch(apiurl);
      const jsonResult = await result.json()
      console.log("results------>",jsonResult);
      setPictures(jsonResult.results)
    }
    fetchdata()
  }, [])


  return (
    <View style={styles.storyContainer}>
      <FlatList
        data={pictures}
        keyExtractor = {(item) => item.login.uuid}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View>
              <ProfilePicture uri={item.picture.medium} />
              <Text style={styles.storyName}>{'hello'}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
