import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

export default function ProfilePicture({uri,name}) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri,
        }}
        style={styles.profileImage}
      />
      <Text style={styles.storyName}>{name}</Text>
    </View>
  );
}
