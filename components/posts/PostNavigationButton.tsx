import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useContext } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { TabContext } from "../../contexts/tabContext";
import { FollowingFeedStackParamList, HomeStackParamList, ProfileStackParamList, SearchStackParamList } from "../../types";

export const PostNavigationButton = ({children, postID, ...rest}: {children: JSX.Element[] | JSX.Element, postID: string} & TouchableOpacityProps) => {
    
    const tabContext = useContext(TabContext);

    if (tabContext === "Home") {

        const nav = useNavigation<StackNavigationProp<HomeStackParamList>>();

        return (
            <TouchableOpacity {...rest} onPress={() => {nav.push('Post', {postID: postID})}} >
                {children}
            </TouchableOpacity>
        )
    } else if (tabContext === 'FollowindFeed') {

        const nav = useNavigation<StackNavigationProp<FollowingFeedStackParamList>>();

        return (
            <TouchableOpacity {...rest} onPress={() => {nav.push('Post', {postID: postID})}} >
                {children}
            </TouchableOpacity>
        )
    }  else if (tabContext === 'Profile') {

        const nav = useNavigation<StackNavigationProp<ProfileStackParamList>>();

        return (
            <TouchableOpacity {...rest} onPress={() => {nav.push('Post', {postID: postID})}} >
                {children}
            </TouchableOpacity>
        )
    } else {

        const nav = useNavigation<StackNavigationProp<SearchStackParamList>>();

        return (
            <TouchableOpacity {...rest} onPress={() => {nav.push('Post', {postID: postID})}} >
                {children}
            </TouchableOpacity>
        )
    }
}