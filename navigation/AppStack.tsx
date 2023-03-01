import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../contexts/userContext';

//Navigation
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FollowingFeedTabScreenProps, HomeTabScreenProps, ProfileTabScreenProps, RootParamList, RootTabParamList, SearchTabScreenProps } from '../types';

//Other 
import { Icon } from '@rneui/themed';
import Colors from '../constants/Colors';
import IconButton from '../components/IconButton';
import { useNavigation } from '@react-navigation/native';
import { signOutUser } from '../models/user-model';

//Screens
import PostFormScreen from '../screens/PostFormScreen';
import SettingsScreen from '../screens/SettingsScreen';

//Stacks
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import FollowingFeedStack from './FollowingFeedStack';
import ProfileStack from './ProfileStack';

const TabStack = createBottomTabNavigator<RootTabParamList>();
const RootStack = createStackNavigator<RootParamList>();

type NavigationProps = StackNavigationProp<RootParamList>;

const AppStack = () => {

  const nav = useNavigation<NavigationProps>();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: true,
        title: 'Expose ',
        headerStyle: {
          backgroundColor: Colors.light.tint,
          borderBottomColor: 'black',
          borderBottomWidth: 2
        },
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
          marginBottom: 5,
          fontStyle: 'italic'
        },
        headerTitleAlign: 'left',
        headerRight: () => (
          <View style={{display: 'flex', flexDirection: 'row'}}>
          <IconButton
            iconComponent={
              <Icon
                name='settings'
                type='feather'
              />
            }
            onPress={() => nav.navigate('Settings')}
          />
          <IconButton
            iconComponent={
              <Icon
                name='sign-out'
                type='font-awesome'
              />
            }
            onPress={signOutUser}
          />
          </View>
          
        ),
        headerBackImage: () => (<Icon name='arrow-back-ios' type='material-icons' style={{marginLeft: 10, marginBottom: 5}}/>),
        headerBackTitleVisible: false,

      }}
    >
      <RootStack.Screen name='Main'  component={MainTabStack}/>
      <RootStack.Screen name='Modal' component={PostFormScreen}/>
      <RootStack.Screen name='Settings' component={SettingsScreen}/>
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
        name='HomeStack' 
        component={HomeStack}
        options={({ navigation }: HomeTabScreenProps) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name='home' color={color} size={30}/>
          )
        })}
      />
      <TabStack.Screen 
        name='FollowingFeedStack' 
        component={FollowingFeedStack}
        options={({ navigation }: FollowingFeedTabScreenProps) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name='contacts' color={color} size={30}/>
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
        name='ProfileStack' 
        component={ProfileStack} 
        options={({ navigation }: ProfileTabScreenProps) => ({
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