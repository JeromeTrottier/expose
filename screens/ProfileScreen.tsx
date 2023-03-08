import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { ProfileScreenProps, RootParamList } from '../types'
import { UserContext } from '../contexts/userContext'
import { windowWidth } from '../utils/Dimensions'
import InteractionButton from '../components/InteractionButton'
import UserProfileInfo from '../components/profile/UserProfileInfo'
import useDBUser from '../hooks/useDBUser'
import useProfilePicture from '../hooks/useProfilePicture'
import LazyLoadingImage from '../components/LazyLoadingImage'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import ExposesList from '../components/ExposesList'
import Colors from '../constants/Colors'
import { followUser, unfollowUser } from '../models/user-model'
import useIsUserFollowed from '../hooks/useIsUserFollowed'

type MainNavigationProps = StackNavigationProp<RootParamList>;

const ProfileScreen = ({route, navigation}: ProfileScreenProps) => {
    
    const user = useContext(UserContext);
    const mainNav = useNavigation<MainNavigationProps>();
    
    if (user?.user.uid === route.params.userID || route.params.userID === undefined) {
        const profilePictureUrl = useProfilePicture(user?.userData.profilePictureID);

        return (
            <View style={styles.container}>
                {
                    user ? 
                    <ExposesList
                        userID={user.user.uid}
                        headerComponent={
                            <View style={styles.profileHeader}>
                                <View style={styles.identityContainer}>
                                {
                                    profilePictureUrl ? 
                                    <LazyLoadingImage
                                        profilePictureUrl={profilePictureUrl}
                                        width={windowWidth / 3}
                                        height={windowWidth / 3}
                                    />
                                    :
                                    <></>
                                }
                                    <Text style={styles.profileName}>{user.user.displayName}</Text>
                                </View>
                                <View>
                                    <UserProfileInfo userID={user?.user.uid}/>
                                </View>
                                <Text style={styles.profileName}>Exposes</Text>
                            </View>
                        }
                    />
                    
                    :
                    <></>
                }
            </View>
        )
    } else {

        const otherUser = useDBUser(route.params.userID);

        const profilePictureUrl = useProfilePicture(otherUser.profilePictureID);

        const [following, setFollowing] = useState<boolean>(false);

        const isOtherUserFollowed = useIsUserFollowed(user?.user.uid, route.params.userID, following);  

        const handleUnfollow = async () => {
            await unfollowUser(user?.user.uid, route.params.userID);
            setFollowing(!following);
        }

        const handleFollow = async () => {
            await followUser(user?.user.uid, route.params.userID);
            setFollowing(!following);
        }
    

        return (
            <View style={styles.container}>
                {
                    user ? 
                    <ExposesList
                        userID={route.params.userID}
                        headerComponent={
                            <View style={styles.profileHeader}>
                                <View style={styles.identityContainer}>
                                {
                                    profilePictureUrl ? 
                                    <LazyLoadingImage
                                        profilePictureUrl={profilePictureUrl}
                                        width={windowWidth / 3}
                                        height={windowWidth / 3}
                                    />
                                    :
                                    <></>
                                }
                                    <Text style={styles.profileName}>{otherUser.displayName} </Text>
                                </View>
                                <View style={styles.interactionContainer}>
                                    <InteractionButton label='Expose cette personne' margin={10} onPress={() => mainNav.navigate('Modal', {authorID: route.params.userID})}/>
                                    {
                                        isOtherUserFollowed ?
                                        <InteractionButton label='Suivi(e) ✓' fillRemainingSpace={true} onPress={handleUnfollow}/>
                                        :
                                        <InteractionButton label='Suivre' fillRemainingSpace={true} onPress={handleFollow}/>

                                    }
                                    
                                </View>
                                <View>
                                    <UserProfileInfo userID={route.params.userID} stateModulator={following}/>
                                </View>
                                <Text style={styles.profileName}>Exposes </Text>
                            </View>
                        }
                    />
                    :
                    <></>
                }
            </View>
        )
    }
    
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.background,
        flex: 1
    },
    profileHeader: {
        marginBottom: 10
    },
    identityContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },
    profileName: {
        marginLeft: 10,
        fontSize: 25,
        fontWeight: '600',
        fontStyle: 'italic'
    },
    profilePictureContainer: {
        width: windowWidth / 3,
        height: windowWidth / 3,
        shadowOffset: {width: 3, height: 3},
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 0
    },
    profilePicture: {
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'black'
    },
    interactionContainer: {
        marginHorizontal: 20,
        display: "flex",
        flexDirection: 'row',
        
    }
})