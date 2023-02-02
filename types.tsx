import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'


//Authentification
export type AuthStackParamList = {
    Onboarding: undefined;
    Login: undefined;
    SignUp: undefined;
}

export type OnboardingScreenProps = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;
export type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;


//App
export type RootTabParamList = {
    Home: undefined;
    Profile: undefined;
}

export type HomeScreenProps = BottomTabScreenProps<RootTabParamList, 'Home'>;
export type ProfileScreenProps = BottomTabScreenProps<RootTabParamList, 'Profile'>;
