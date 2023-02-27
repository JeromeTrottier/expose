import { StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'
import useDBUser from '../hooks/useDBUser';
import LazyLoadingImage from './LazyLoadingImage';
import useProfilePicture from '../hooks/useProfilePicture';

type AuthorProps = {
    authorID: string;
    exposerID: string;
}

const Author = ({authorID, exposerID, ...rest}: AuthorProps & ViewProps) => {

  const authorData = useDBUser(authorID);
  const authorPicture = useProfilePicture(authorData.profilePictureID);

  const {displayName: exposerName} = useDBUser(exposerID);
  

    return (
        <View  {...rest}>
            <View style={styles.container}>
                <LazyLoadingImage
                    profilePictureUrl={authorPicture}
                    width={35}
                    height={35}
                />
                <View>
                    <Text style={styles.author}>{authorData.displayName}</Text>
                    <Text style={styles.exposer}><Text style={{fontWeight: '400'}}>Exposé par </Text>{exposerName}</Text>
                </View>
                
            </View>
        </View>
    )
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