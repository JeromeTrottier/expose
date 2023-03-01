import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ProfileStackParamList, ProfileTabScreenProps } from '../types';
import { TabContext } from '../contexts/tabContext';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../constants/Colors';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStack = ({navigation, route}: ProfileTabScreenProps) => {
  return (
    <TabContext.Provider value='Profile'>
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerBackTitleVisible: false,
                headerTitle: 'Un beau profil',
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
            <Stack.Screen name='Profile' component={ProfileScreen} initialParams={{userID: route.params.userID}}/>
            <Stack.Screen name='Post' component={PostScreen} />
        </Stack.Navigator>
    </TabContext.Provider>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})