import { StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'
import Author from './Author';
import LazyLoadingImage from './LazyLoadingImage';
import {LinearGradient} from 'expo-linear-gradient';
import PostInteractionButton from './PostInteractionButton';
import { Icon } from '@rneui/themed';
import Colors from '../constants/Colors';
import PostRatingButton from './PostRatingButton';
import usePostImage from '../hooks/usePostImage'

type PostProps = {
    title?: string;
    description?: string;
    authorID?: string;
    exposerID?: string;
    imageID?: string;
    
}

const Post = ({title="No title", description, authorID, exposerID, imageID}: PostProps) => {

    const imageURL = usePostImage(imageID);

    return (
        <View style={styles.container}>
        {
            imageURL ? 
            <>
                <LinearGradient
                    colors={['rgba(255,255,255,0.6)', 'transparent']}
                    style={styles.gradient}
                />
                {
                    (exposerID && authorID) ?
                    <Author 
                        authorID={authorID}
                        exposerID={exposerID}
                        style={{position: 'absolute', zIndex: 4, margin: 10}}
                    /> :
                    <></>
                }
                
                <LazyLoadingImage
                    profilePictureUrl={imageURL}
                    borderWidth={0}
                    borderRadius={0}
                    shadowOffset={0}
                    width={'auto'}
                    height={275}
                />
            </>
            :
                (exposerID && authorID) ?
                    <Author 
                        authorID={authorID}
                        exposerID={exposerID}
                    />
                :
                <></>
            
        }
        
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.postBottom}>
            <PostInteractionButton 
                iconComponent={
                    <Icon
                        name='share'
                        type='font-awesome-5'
                        size={23}
                        color={'black'}
                    />
                }
                color={Colors.light.pink}
            />
            <PostInteractionButton 
                iconComponent={
                    <Icon
                        name='comments'
                        type='font-awesome-5'
                        size={20}
                        color={'black'}
                    />
                }
                color={Colors.light.tint}
                hasCounter={true}
            />
            <PostRatingButton
                color={Colors.light.yellow}
            />
        </View>
        
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    gradient: {
        left: 0,
        right: 0,
        top: 0,
        height: 150,
        position: 'absolute',
        zIndex: 2,
        borderRadius: 6
    },
    container: {
        borderColor: 'black',
        borderWidth: 2,
        marginHorizontal: 20,
        borderRadius: 8,
        position: 'relative',
        backgroundColor: 'white'
    },
    title: {
        marginTop: 10,
        marginHorizontal: 20,
        fontSize: 28,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 18,
        marginHorizontal: 20,
        marginBottom: 10
    },
    postBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 10
    }
})