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
    HomeStack: undefined;
    ProfileStack: {userID: string};
    SearchStack: undefined;
    FollowingFeedStack: undefined;
}

export type HomeTabScreenProps = BottomTabScreenProps<RootTabParamList, 'HomeStack'>;

export type FollowingFeedTabScreenProps = BottomTabScreenProps<RootTabParamList, 'FollowingFeedStack'>;

export type ProfileTabScreenProps = BottomTabScreenProps<RootTabParamList, 'ProfileStack'>;

export type ProfileScreenProps = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, 'ProfileStack'>,
    CompositeScreenProps<
        NativeStackScreenProps<SearchStackParamList, 'Profile'>,
        NativeStackScreenProps<HomeStackParamList, 'Profile'>
    >
    
>;
export type SearchTabScreenProps = BottomTabScreenProps<RootTabParamList, 'SearchStack'>;

//Home Stack 
export type HomeStackParamList = {
    Home: undefined;
    Profile: {userID: string};
    Post: {postID: string};
}

export type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export type PostScreenProps = NativeStackScreenProps<HomeStackParamList, 'Post'>;

//Feed Stack
export type FollowingFeedStackParamList = {
    FollowingFeed: undefined;
    Profile: {userID: string};
    Post: {postID: string};
}
 
export type FollowingFeedScreenProps = NativeStackScreenProps<FollowingFeedStackParamList, 'FollowingFeed'>;

//Search Stack
export type SearchStackParamList = {
    Search: undefined;
    Profile: {userID: string};
    Post: {postID: string};
}

export type SearchScreenProps = NativeStackScreenProps<SearchStackParamList, 'Search'>;

//Profile Stack
export type ProfileStackParamList = {
    Profile: {userID: string};
    Post: {postID: string};
}

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
    postID: string;
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

export type ExposePostStats={
    upvotes: number;
    downvotes: number;
}

export type TabType = "Home" | "FollowindFeed" | "Search" | "Profile"; 