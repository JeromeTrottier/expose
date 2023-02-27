import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { ExoticComponent } from "react";
import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";

//Authentification Stack
export type AuthStackParamList = {
    Onboarding: undefined;
    Login: undefined;
    SignUp: undefined;
}

export type OnboardingScreenProps = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;
export type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;


//App Stack

export type RootParamList = {
    Main: undefined;
    Modal: {authorID: string | undefined};
    Settings: undefined;
}

export type PostFormScreenProps = NativeStackScreenProps<RootParamList, 'Modal'>;

export type RootTabParamList = {
    Home: undefined;
    Profile: {userID: string};
    SearchStack: undefined;
    FollowingFeed: undefined;
}

export type HomeTabScreenProps = BottomTabScreenProps<RootTabParamList, 'Home'>;

export type FollowingFeedScreenProps = BottomTabScreenProps<RootTabParamList, 'FollowingFeed'>;

export type ProfileScreenProps = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, 'Profile'>,
    NativeStackScreenProps<SearchStackParamList, 'OtherProfile'>
>;
export type SearchTabScreenProps = BottomTabScreenProps<RootTabParamList, 'SearchStack'>;


//Search Stack
export type SearchStackParamList = {
    Search: undefined;
    OtherProfile: {userID: string};
}

export type SearchScreenProps = NativeStackScreenProps<SearchStackParamList, 'Search'>;
// export type OtherProfileScreenProps = NativeStackScreenProps<SearchStackParamList, 'OtherProfile'>;


//Profile Tabs
export type ProfileTabParamList = {
    Posts: undefined;
    Exposes: undefined;
}

export type PostsTabScreenProps = MaterialTopTabScreenProps<ProfileTabParamList, 'Posts'>;
export type ExposesTabScreenProps = MaterialTopTabScreenProps<ProfileTabParamList, 'Exposes'>;

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

export type ExposePostForm = {
    title: string;
    description: string;
    imageURI: string;
    authorID: string;
    exposerID: string;
}

export type DBExposePost = {
    title: string;
    description: string;
    imageID: string;
    authorID: string;
    exposerID: string;
    createdAt: number;
}

export type ExposeUserStats = {
    followers: number;
    posts: number;
    exposes: number;
}