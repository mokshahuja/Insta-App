import React, {useContext, useState} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Stories from '../../components/Stories';
import Post from '../../components/Post/Post';
import {createStackNavigator} from '@react-navigation/stack';
import StoriesGallery from '../../components/StoriesGallery';
import Feather from 'react-native-vector-icons/Feather';
import Inonicons from 'react-native-vector-icons/Ionicons';
import {UserContext} from '../../Context/UserContext';

export const Homo = ({navigation}) => {
  console.log('homo func');
  const value = useContext(UserContext);

  const pictures = value.pictures;

  if (pictures === null) {
    return <Text>Loading....</Text>;
  }

  return (
    <FlatList
      data={pictures}
      keyExtractor={(item) => item.login.uuid}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <Stories pictures={pictures} navigation={navigation} />
      }
      renderItem={({item}) => {
        return <Post item={item} />;
      }}
    />
  );
};

export default function Home() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Homo}
        options={{
          title: 'Intagram',
          headerLeft: () => <Feather name="camera" size={25} color={'#000'} />,
          headerRight: () => (
            <Inonicons name="paper-plane-outline" size={25} color={'#000'} />
          ),
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {marginLeft: 5},
          headerRightContainerStyle: {marginRight: 5},
          headerTitleStyle: {fontFamily: 'cascadia-code'},
        }}
      />
      <Stack.Screen
        name="StoriesGallery"
        component={StoriesGallery}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
