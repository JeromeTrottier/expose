import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import useFirebaseStorageImage from '../../hooks/useFirebaseStorageImage';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SearchStackParamList } from "../../types";

type NavigationProps = StackNavigationProp<SearchStackParamList>;

type UserResultProps = {
    displayName: string;
    profilePictureID: string;
    username: string;
    userID: string;
}

const UserResult = ({displayName, profilePictureID, username, userID}: UserResultProps) => {

    const nav = useNavigation<NavigationProps>();

    const profilePictureUrl = useFirebaseStorageImage(`images/profilePictures/${profilePictureID}.jpg`);

  return (
    <TouchableOpacity
        onPress={() => nav.push('OtherProfile', {userID: userID})}
    >
        <View style={styles.container}>
            {
                profilePictureID ? 
                <Image
                source={{uri: profilePictureUrl}}
                style={styles.image}
                /> :
                <></>
            }
            <View>
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
        padding: 20,
        alignItems: "center"
    },
    displayName: {
        fontSize: 18,
        fontWeight: "bold"
    },
    username: {
        color: "#222"
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25
    }
})