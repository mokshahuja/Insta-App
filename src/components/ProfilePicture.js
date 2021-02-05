import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

export default function ProfilePicture({uri, name, size=""}) {
  return (
    <View style={size !== 'small' ? styles.container : styles.smallContainer}>
      <Image
        source={{
          uri,
        }}
        style={size !== 'small' ? styles.profileImage : styles.smallImage}
      />
      {/* { name && <Text style={styles.storyName}>{name}</Text>} */}
    </View>
  );
}
