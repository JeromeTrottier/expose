import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { ExoticComponent } from "react";

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

export type ExposeUser = {
    displayName: string;
    username: string;
    password: string;
    email: string;
    profilePictureURI: string;
}

export type DBExposeUser = {
    displayName?: string | null;
    username?: string |null;
    email?: string | null;
    profilePictureURI?: string |null;
}
