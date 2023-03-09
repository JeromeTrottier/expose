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
import Colors from '../constants/Colors';
import { Icon } from '@rneui/themed';

const AuthStack = () => {

    const isFirstLaunch = useFirstLaunch();

    if (isFirstLaunch === null) {
        return null;
    } else {
        return (
            <Stack.Navigator
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
                    headerBackImage: () => (<Icon name='arrow-back-ios' type='material-icons' style={{marginLeft: 10, marginBottom: 5}}/>),
                    headerBackTitleVisible: false,
                }}
                
                >
                {
                    isFirstLaunch ? 
                    <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{headerShown: false}}/>
                    : 
                    <></>
                }                
                <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name='SignUp' component={SignUpScreen} options={{
                    headerShown: true,
                    headerBackTitle: 'Connexion'
                }}/>
            </Stack.Navigator>
        );
    }
}

export default AuthStack;
