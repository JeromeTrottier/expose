import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SearchStackParamList } from '../types';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../constants/Colors';
import { TabContext } from '../contexts/tabContext';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator<SearchStackParamList>();

const SearchStack = () => {
  return (
    <TabContext.Provider value='Search'>
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
          <Stack.Screen name='Profile' component={ProfileScreen}/>
          <Stack.Screen name='Post' component={PostScreen} />
      </Stack.Navigator>
    </TabContext.Provider>
    
  )
}

export default SearchStack

const styles = StyleSheet.create({})