import React from 'react'
import { View, Text ,SafeAreaView, StatusBar } from 'react-native'
import Home from './src/screens/HomeScreen/Home'

export default function App() {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </View>
  )
}
