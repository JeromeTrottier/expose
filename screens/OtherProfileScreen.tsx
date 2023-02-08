import { StyleSheet, Text, View } from 'react-native'
import { OtherProfileScreenProps } from '../types'
import useDBUser from '../hooks/useDBUser'
import useProfilePicture from '../hooks/useProfilePicture'
import { windowWidth } from '../utils/Dimensions'
import LazyLoadingImage from '../components/LazyLoadingImage'
import InteractionButton from '../components/InteractionButton'

const OtherProfileScreen = ({route, navigation}: OtherProfileScreenProps) => {

    const userInfo = useDBUser(route.params.userID);

    const profilePictureUrl = useProfilePicture(userInfo.profilePictureID);
    
    if (userInfo.displayName) {
        navigation.setOptions({
            headerTitle: userInfo.displayName
        })
    }   
    

    return (
        <View style={styles.container}>
            <LazyLoadingImage 
                profilePictureUrl={profilePictureUrl}
                width={windowWidth - 10}
                height={windowWidth - 10}
            />
            <Text style={styles.displayName}>{userInfo.displayName}</Text>
            <Text style={styles.username}>{userInfo.username}</Text>
            <InteractionButton />
        </View>
    )
}

export default OtherProfileScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    
    displayName: {
        fontSize: 30,
        fontWeight: "bold"
    },
    username: {

    }
})