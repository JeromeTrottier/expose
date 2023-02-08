import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeTabScreenProps, ProfileTabScreenProps, RootTabParamList, SearchTabScreenProps } from '../types';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Icon } from '@rneui/themed';
import SearchStack from './SearchStack';

const Stack = createStackNavigator<RootTabParamList>();

const TabStack = createBottomTabNavigator<RootTabParamList>();

const AppStack = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <TabStack.Screen 
          name='Home' 
          component={HomeScreen}
          options={({ navigation }: HomeTabScreenProps) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => (
              <Icon name='home' color={color} size={30}/>
            ),
          })}
        />
        <TabStack.Screen 
          name='Search' 
          component={SearchStack}
          options={({ navigation }: SearchTabScreenProps) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => (
              <Icon name='search' color={color} size={30}/>
            ),
          })}
        />
        <TabStack.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={({ navigation }: ProfileTabScreenProps) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => (
              <Icon name='user-alt' type='font-awesome-5' color={color}/>
            ),
          })}
        />
    </TabStack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})