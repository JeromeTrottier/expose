import { StyleSheet, Text, TouchableOpacityProps, View, ViewProps } from 'react-native'
import React, { useContext } from 'react'
import useDBUser from '../../hooks/useDBUser';
import LazyLoadingImage from '../LazyLoadingImage';
import useProfilePicture from '../../hooks/useProfilePicture';
import { TouchableOpacity } from 'react-native';
import { TabContext } from '../../contexts/tabContext';
import { useNavigation } from '@react-navigation/native';
import { FollowingFeedStackParamList, HomeStackParamList, ProfileStackParamList, SearchStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

type AuthorProps = {
    authorID: string;
    exposerID?: string;
    isCommentAuthor?: boolean;
}

const Author = ({authorID, exposerID, isCommentAuthor=false, ...rest}: AuthorProps & ViewProps) => {

    const authorData = useDBUser(authorID);
    const authorPicture = useProfilePicture(authorData.profilePictureID);

    const {displayName: exposerName} = useDBUser(exposerID);
    
    return (
        <View  {...rest}>
            <View style={styles.container}>
                <ProfileNavigationButton
                    userID={authorID}
                >
                    <LazyLoadingImage
                        profilePictureUrl={authorPicture}
                        width={35}
                        height={35}
                     />
                </ProfileNavigationButton>
                <View>
                    <ProfileNavigationButton userID={authorID}>
                        <Text style={styles.author}>{authorData.displayName}</Text>
                    </ProfileNavigationButton>
                    {
                        (!isCommentAuthor && exposerID) ? 
                        <ProfileNavigationButton userID={exposerID}>
                            <Text style={styles.exposer}><Text style={{fontWeight: '400'}}>Exposé par </Text>{exposerName}</Text>
                        </ProfileNavigationButton> :
                        <></>
                    }   
                </View>
                
            </View>
        </View>
    )
}

const ProfileNavigationButton = ({children, userID, ...rest}: {children: JSX.Element[] | JSX.Element, userID: string} & TouchableOpacityProps) => {
    
    const tabContext = useContext(TabContext);

    if (tabContext === "Home") {

        const nav = useNavigation<StackNavigationProp<HomeStackParamList>>();

        return (
            <TouchableOpacity {...rest} onPress={() => {nav.push('Profile', {userID: userID})}} >
                {children}
            </TouchableOpacity>
        )
    } else if (tabContext === 'FollowindFeed') {

        const nav = useNavigation<StackNavigationProp<FollowingFeedStackParamList>>();

        return (
            <TouchableOpacity {...rest} onPress={() => {nav.push('Profile', {userID: userID})}} >
                {children}
            </TouchableOpacity>
        )
    }  else if (tabContext === 'Profile') {

        const nav = useNavigation<StackNavigationProp<ProfileStackParamList>>();

        return (
            <TouchableOpacity {...rest} onPress={() => {nav.push('Profile', {userID: userID})}} >
                {children}
            </TouchableOpacity>
        )
    } else {

        const nav = useNavigation<StackNavigationProp<SearchStackParamList>>();

        return (
            <TouchableOpacity {...rest} onPress={() => {nav.push('Profile', {userID: userID})}} >
                {children}
            </TouchableOpacity>
        )
    }
}

export default Author

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    author: {
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 10
    },
    exposer: {
        fontWeight: '600',
        marginLeft: 10,
        fontSize: 12
    }
})