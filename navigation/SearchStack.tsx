import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SearchStackParamList } from '../types';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator<SearchStackParamList>();

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false,
        headerTitle: '',
        headerStyle: {
          backgroundColor: Colors.light.background
        }
      }}
    >
        <Stack.Screen name='Search' component={SearchScreen} options={{headerShown: false}}/>
        <Stack.Screen name='OtherProfile' component={ProfileScreen}/>
    </Stack.Navigator>
  )
}

export default SearchStack

const styles = StyleSheet.create({})