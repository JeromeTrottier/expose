import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreenProps, ProfileScreenProps, RootTabParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Icon } from '@rneui/themed';

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
          options={({ navigation }: HomeScreenProps) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => (
              <Icon name='home' color={color} size={30}/>
            ),
          })}
        />
        <TabStack.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={({ navigation }: ProfileScreenProps) => ({
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