import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {Input, Button} from 'react-native-elements';
import {auth} from '../../../backend/firebase';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace('Home');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={{height: '50%'}}>
        <View style={styles.Greettop}>
          <Text style={styles.GreettopText}>Welcome Back</Text>
        </View>
        <View style={styles.Greetbottom}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              borderTopLeftRadius: 150,
            }}></View>
        </View>
      </View>

      <View style={styles.info}>
        <View>
          <Input
            placeholder="Email"
            value={email}
            type="email"
            onChangeText={(value) => setEmail(value)}
            leftIcon={<Fontisto name="email" size={25} color="#000" />}
          />
          <Input
            placeholder="Password"
            value={password}
            type="password"
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
            leftIcon={<AntDesign name="lock1" size={25} color="#000" />}
          />
        </View>
      </View>
      <View style={styles.buttonPart}>
        <Button
          title="Login"
          containerStyle={{
            backgroundColor: 'blue',
            size: 20,
            width: '80%',
            alignSelf: 'center',
          }}
          onPress={() => {
            navigation.navigate('Home');
          }}
          disabled={email.length === 0 || password.length === 0}
          onPress={() => {
            console.log('Email', email);
            console.log('Password', password);
            auth
              .signInWithEmailAndPassword(email, password)
              .then((userData) => {
                const user = userData.user;
                console.log(user);
                navigation.replace('Home');
              })
              .catch((error) => {
                console.log(error.message);
              });
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              borderBottomWidth: 0.7,
              width: '30%',
              borderColor: 'black',
            }}></View>
          <Text>OR</Text>
          <View
            style={{
              borderBottomWidth: 0.7,
              width: '30%',
              borderColor: 'black',
            }}></View>
        </View>

        <Button
          title="SignUp"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          containerStyle={{backgroundColor: 'blue', size: 20, width: '80%'}}
        />
      </View>
    </View>
  );
}
