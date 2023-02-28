import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import { HomeStackParamList } from '../types'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { TabContext } from '../contexts/tabContext';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';

const Stack = createStackNavigator<HomeStackParamList>();

type NavigationProps = StackNavigationProp<HomeStackParamList>;


const HomeStack = () => {

    // const nav = useNavigation<>();

    return (
        <TabContext.Provider value={'Home'}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    headerBackTitleVisible: false,
                    headerTitle: "Votre d'actualité",
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
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Profile' component={ProfileScreen} />
            </Stack.Navigator>
        </TabContext.Provider>
  )
}

export default HomeStack

const styles = StyleSheet.create({})