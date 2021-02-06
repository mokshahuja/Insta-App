import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import Home from '../HomeScreen/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Inonicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Search from '../Search/Search';
import PostsUpload from '../PostsUpload/PostsUpload';
import Noti from '../Notifications/Noti';
import Profile from '../Profile/Profile';
import Login from '../Authentication/Login';
import SignUp from '../Authentication/SignUp';

export default function DefaultHome() {
  const Tab = createBottomTabNavigator();

  const HomeStack = createStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Intagram',
            headerLeft: () => (
              <Feather name="camera" size={25} color={'#000'} />
            ),
            headerRight: () => (
              <Inonicons name="paper-plane-outline" size={25} color={'#000'} />
            ),
            headerTitleAlign: 'center',
            headerLeftContainerStyle: {marginLeft: 5},
            headerRightContainerStyle: {marginRight: 5},
            headerTitleStyle: {fontFamily: 'cascadia-code'},
          }}
        />
      </HomeStack.Navigator>
    );
  }

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return <Entypo name="home" size={size} color={color} />;
            } else if (route.name === 'Search') {
              return <Feather name="search" size={size} color={color} />;
            } else if (route.name === 'Posts') {
              return <Feather name="plus-square" size={size} color={color} />;
            } else if (route.name === 'Notifications') {
              return <AntDesign name="hearto" size={size} color={color} />;
            } else if (route.name === 'Profile') {
              return (
                <Inonicons name="person-outline" size={size} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveBackgroundColor: '#fff',
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={Login} />
        <Tab.Screen name="Posts" component={SignUp} />
        <Tab.Screen name="Notifications" component={Noti} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
