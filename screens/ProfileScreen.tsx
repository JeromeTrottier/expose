import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { ProfileScreenProps, RootParamList } from '../types'
import { UserContext } from '../contexts/userContext'
import useFirebaseStorageImage from '../hooks/useFirebaseStorageImage'
import { windowWidth } from '../utils/Dimensions'
import InteractionButton from '../components/InteractionButton'
import UserProfileInfo from '../components/UserProfileInfo'
import Post from '../components/Post'
import { ScrollView } from 'react-native-gesture-handler'
import useDBUser from '../hooks/useDBUser'
import useProfilePicture from '../hooks/useProfilePicture'
import LazyLoadingImage from '../components/LazyLoadingImage'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type MainNavigationProps = StackNavigationProp<RootParamList>;

const ProfileScreen = ({route, navigation}: ProfileScreenProps) => {
    
    const user = useContext(UserContext);

    

    const mainNav = useNavigation<MainNavigationProps>();
    
    
    if (user?.user.uid === route.params.userID || route.params.userID === undefined) {
        
        const profilePictureUrl = useFirebaseStorageImage(`images/profilePictures/${user?.userData._z.profilePictureID}.jpg`)

        return (
            <ScrollView
            alwaysBounceVertical={true}
            >
                {
                    user ? 
                    <View>
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
                            <Text style={styles.profileName}>{user.userData._z.displayName}</Text>
                        </View>
                        <View style={styles.interactionContainer}>
                            <InteractionButton label='Paramètres' margin={10}/>

                        </View>
                        <View>
                            <UserProfileInfo />
                        </View>
                        <View
                            
                        >
                            <Post/>
                        </View>
                    </View>
                    
                    :
                    <></>
                }
            </ScrollView>
        )
    } else {

        const otherUser = useDBUser(route.params.userID);

        const profilePictureUrl = useProfilePicture(otherUser.profilePictureID);

        return (
            <ScrollView
            alwaysBounceVertical={true}
            >
                {
                    user ? 
                    <View>
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
                            <Text style={styles.profileName}>{otherUser.displayName}</Text>
                        </View>
                        <View style={styles.interactionContainer}>
                            <InteractionButton label='Expose cette personne' margin={10} onPress={() => mainNav.navigate('Modal', {authorID: route.params.userID})}/>
                            <InteractionButton label='Suivre' padding={48}/>
                        </View>
                        <View>
                            <UserProfileInfo />
                        </View>
                        <View>
                            <Post/>
                        </View>
                    </View>
                    
                    :
                    <></>
                }
            </ScrollView>
        )
    }
    
}

export default ProfileScreen

const styles = StyleSheet.create({

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