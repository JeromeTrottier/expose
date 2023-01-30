import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})