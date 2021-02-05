import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import ProfilePicture from './ProfilePicture';
import styles from './styles';

export default function Stories({pictures}) {

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
              <ProfilePicture uri={item.picture.medium} name={item.login.username} />
            </View>
          );
        }}
      />
    </View>
  );
}
