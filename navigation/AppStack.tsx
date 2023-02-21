import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeTabScreenProps, ProfileScreenProps, RootParamList, RootTabParamList, SearchTabScreenProps } from '../types';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Icon } from '@rneui/themed';
import SearchStack from './SearchStack';
import Colors from '../constants/Colors';
import { UserContext } from '../contexts/userContext';
import CreatePostButton from '../components/CreatePostButton';
import PostFormScreen from '../screens/PostFormScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TabStack = createBottomTabNavigator<RootTabParamList>();
const RootStack = createStackNavigator<RootParamList>();


const AppStack = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: true,
        title: 'Expose',
        headerStyle: {
          backgroundColor: Colors.light.tint,
          borderBottomColor: 'black',
          borderBottomWidth: 2
        },
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
          marginBottom: 5
        },
        headerTitleAlign: 'left',
        headerRight: () => (<CreatePostButton/>),
        headerBackImage: () => (<Icon name='arrow-back-ios' type='material-icons' style={{marginLeft: 10, marginBottom: 5}}/>),
        headerBackTitleVisible: false,

      }}
    >
      <RootStack.Screen name='Main'  component={MainTabStack}/>
      <RootStack.Screen name='Modal' component={PostFormScreen}/>
    </RootStack.Navigator>
  )
}

const MainTabStack = () => {

  const user = useContext(UserContext);

  return (
    <TabStack.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: Colors.light.background,
        borderTopColor: 'black',
        borderTopWidth: 2
      },
      tabBarActiveTintColor: Colors.light.background,
      tabBarInactiveTintColor: Colors.light.tint,
      tabBarActiveBackgroundColor: Colors.light.tint
    }}
  >
      <TabStack.Screen 
        name='Home' 
        component={HomeScreen}
        options={({ navigation }: HomeTabScreenProps) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name='home' color={color} size={30}/>
          )
        })}
      />
      <TabStack.Screen 
        name='SearchStack' 
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
        options={({ navigation }: ProfileScreenProps) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name='user-alt' type='font-awesome-5' color={color}/>
          ),
        })}
        initialParams={{userID: user?.user.userID}}
      />
  </TabStack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})