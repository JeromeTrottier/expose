import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { ExoticComponent } from "react";

//Authentification Stack
export type AuthStackParamList = {
    Onboarding: undefined;
    Login: undefined;
    SignUp: undefined;
}

export type OnboardingScreenProps = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;
export type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;


//App Stack
export type RootTabParamList = {
    Home: undefined;
    Profile: undefined;
    Search: undefined;
}

export type HomeTabScreenProps = BottomTabScreenProps<RootTabParamList, 'Home'>;
export type ProfileTabScreenProps = BottomTabScreenProps<RootTabParamList, 'Profile'>;
export type SearchTabScreenProps = BottomTabScreenProps<RootTabParamList, 'Search'>;


//Search Stack
export type SearchStackParamList = {
    Search: undefined;
    OtherProfile: {userID: string};
}

export type SearchScreenProps = NativeStackScreenProps<SearchStackParamList, 'Search'>;
export type OtherProfileScreenProps = NativeStackScreenProps<SearchStackParamList, 'OtherProfile'>;


// Users
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
    profilePictureID: string | null;
}
