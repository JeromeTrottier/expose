import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { ProfileScreenProps } from '../types'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserContext } from '../contexts/userContext'
import useFirebaseStorageImage from '../hooks/useFirebaseStorageImage'

const ProfileScreen = ({navigation}: ProfileScreenProps) => {

    const user = useContext(UserContext);
    
    if (user) {
        const profilePictureUrl = useFirebaseStorageImage(`images/profilePictures/${user._z.profilePictureID}.jpg`)

        return (
            <SafeAreaView>
                {
                    user ? 
                    <View>
                        {
                            profilePictureUrl ? 
                            <Image 
                                source={{uri: profilePictureUrl}}
                                style={{width: 50, height: 50}}
                            />
                            :
                            <></>
                        }
                        
                        <Text>Email : {user._z.email}</Text>
                        <Text>{user._z.username}</Text>
                        <Text>{user._z.displayName}</Text>
                    </View>
                    
                    :
                    <></>
                }
            </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView>
                <></>
            </SafeAreaView>
        )
    }
    
}

export default ProfileScreen

const styles = StyleSheet.create({})