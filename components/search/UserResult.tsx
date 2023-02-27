import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import useFirebaseStorageImage from '../../hooks/useFirebaseStorageImage';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SearchStackParamList } from "../../types";
import Colors from '../../constants/Colors';
import LazyLoadingImage from '../LazyLoadingImage';
import useProfilePicture from '../../hooks/useProfilePicture';


type NavigationProps = StackNavigationProp<SearchStackParamList>;

type UserResultProps = {
    displayName: string;
    profilePictureID: string;
    username: string;
    userID: string;
}

const UserResult = ({displayName, profilePictureID, username, userID}: UserResultProps) => {

    const nav = useNavigation<NavigationProps>();
    
    const profilePictureUrl = useProfilePicture(profilePictureID);

    return (
        <TouchableOpacity
            onPress={() => nav.push('OtherProfile', {userID: userID})}
        >
            <View style={styles.container}>
                {
                    profilePictureID ? 
                    <LazyLoadingImage
                        profilePictureUrl={profilePictureUrl}
                        width={75}
                        height={75}
                        shadowOffset={3}
                    />
                    :
                    <></>
                }
                <View style={{marginLeft: 10}}>
                    <Text style={styles.displayName}>{displayName}</Text>
                    <Text style={styles.username}>{username}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default UserResult

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 5,
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 2,
        shadowOffset: {width: 4, height: 4},
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 0,
        backgroundColor: Colors.light.yellow
    },
    displayName: {
        fontSize: 18,
        fontWeight: "bold"
    },
    username: {
        color: "#222"
    }
})