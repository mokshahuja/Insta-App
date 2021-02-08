import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {auth} from '../../../backend/firebase';

export default function Profile({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Compo</Text>
      <Button
        title="Sign Out"
        onPress={() => {
          auth
            .signOut()
            .then(() => {
              console.log('Signed Out');
              navigation.replace('Login');
            })
            .catch((err) => console.log(err.message));
        }}></Button>
    </View>
  );
}
