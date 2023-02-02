import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ProfileScreenProps } from '../types'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserContext } from '../contexts/userContext'

const ProfileScreen = ({navigation}: ProfileScreenProps) => {

    const user = useContext(UserContext);
    console.log(user);
    

    return (
        <SafeAreaView>
            {
                user ? 
                <Text>Email : {user.email}</Text>
                :
                <></>
            }
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})