// Navigation
import { NavigationContainer, StackActionHelpers } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from '../types';

//Screens
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator<AuthStackParamList>();

import useFirstLaunch from '../hooks/useFirstLaunch';

const AuthStack = () => {

    const isFirstLaunch = useFirstLaunch();

    if (isFirstLaunch === null) {
        return null;
    } else {
        return (
            <Stack.Navigator>
                {
                    isFirstLaunch ? 
                    <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{headerShown: false}}/>
                    : 
                    <></>
                }                
                <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name='SignUp' component={SignUpScreen} options={{
                    headerShown: true,
                    headerTitle: 'Créer de compte',
                    headerBackTitle: 'Connexion'
                }}/>
            </Stack.Navigator>
        );
    }
}

export default AuthStack;
