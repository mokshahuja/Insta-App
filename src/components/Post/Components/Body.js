import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Body({uri}) {
  return (
    <Image
      source={{uri}}
      style={{
        height: 400,
        width: '100%',
      }}
    />
  );
}
