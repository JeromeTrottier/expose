import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SearchStackParamList } from '../types';
import SearchScreen from '../screens/SearchScreen';
import OtherProfileScreen from '../screens/OtherProfileScreen';

const Stack = createStackNavigator<SearchStackParamList>();

const SearchStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Search' component={SearchScreen} options={{headerShown: false}}/>
        <Stack.Screen name='OtherProfile' component={OtherProfileScreen}/>
    </Stack.Navigator>
  )
}

export default SearchStack

const styles = StyleSheet.create({})