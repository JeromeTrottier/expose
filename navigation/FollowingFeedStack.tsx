import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TabContext } from '../contexts/tabContext'
import { createStackNavigator } from '@react-navigation/stack'
import { FollowingFeedStackParamList } from '../types'
import FollowingFeedScreen from '../screens/FollowingFeedScreen'
import ProfileScreen from '../screens/ProfileScreen'
import Colors from '../constants/Colors'

const Stack = createStackNavigator<FollowingFeedStackParamList>()

const FollowingFeedStack = () => {
  return (
    <TabContext.Provider value='FollowindFeed'>
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerBackTitleVisible: false,
                headerTitle: 'Votre fil de suivis ',
                headerTitleAlign: 'left',
                headerTitleStyle: {
                    fontSize: 18,
                    fontWeight: '600',
                    fontStyle: 'italic'
                },
                headerStyle: {
                  backgroundColor: Colors.light.background
                }
              }}
        >
            <Stack.Screen name='FollowingFeed' component={FollowingFeedScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
        </Stack.Navigator>
    </TabContext.Provider>
  )
}

export default FollowingFeedStack

const styles = StyleSheet.create({})