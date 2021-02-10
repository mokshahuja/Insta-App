import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {Input, Button} from 'react-native-elements';
import {auth} from '../../../backend/firebase';

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={{height: '50%'}}>
        <View style={styles.Greettop}>
          <Text style={styles.GreettopText}>Create Account</Text>
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

      <View style={styles.info2}>
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
          <Input
            placeholder="Confirm Password"
            value={confirmPassword}
            type="password"
            onChangeText={(value) => setConfirmPassword(value)}
            secureTextEntry
            leftIcon={<AntDesign name="lock1" size={25} color="#000" />}
          />
        </View>
      </View>
      <View style={styles.buttonPart}>
        <Button
          title="SignUp"
          onPress={() => {
            // auth
            //   .createUserWithEmailAndPassword(email, password)
            //   .then((authUser) => {
            //     authUser.user.updateProfile({});
            //     console.log(authUser);
            //   })
            //   .catch((error) => console.log(error.message));
            // navigation.navigate('Home');
          }}
          disabled={
            !email.length || !password.length || !confirmPassword.length
          }
          containerStyle={{backgroundColor: 'blue', size: 20, width: '80%'}}
        />
      </View>
    </View>
  );
}
