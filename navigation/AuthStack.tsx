// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

//Screens
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator<RootStackParamList>();

import useFirstLaunch from '../hooks/useFirstLaunch';

const AuthStack = () => {

    const isFirstLaunch = useFirstLaunch();

    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch === false) {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{headerShown: false}}/>
                <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        );
    } else {
        return (
            <LoginScreen/>
        );
    }
  
}

export default AuthStack;
