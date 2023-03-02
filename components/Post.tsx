import { StyleSheet, Text, TouchableOpacityProps, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Author from './Author';
import LazyLoadingImage from './LazyLoadingImage';
import {LinearGradient} from 'expo-linear-gradient';
import PostInteractionButton from './PostInteractionButton';
import { Icon } from '@rneui/themed';
import Colors from '../constants/Colors';
import PostRatingButton from './PostRatingButton';
import usePostImage from '../hooks/usePostImage'
import { TouchableOpacity } from 'react-native';
import { TabContext } from '../contexts/tabContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FollowingFeedStackParamList, HomeStackParamList, ProfileStackParamList, SearchStackParamList } from '../types';
import { PostNavigationButton } from './PostNavigationButton';
import { downvotePost, upvotePost } from '../models/post-model';
import { UserContext } from '../contexts/userContext';
import useComments from '../hooks/useComments';

// Type custom des props passé à chacunes des publications de l'application

type PostProps = {
    title?: string; // Le titre de la publication
    description?: string; // La description de la publication
    authorID?: string; // Le ID de l'utilisateur sur lequel on publie la publication
    exposerID?: string; // Le ID de l'utilisateur qui publie la publication (l'exposer)
    imageID?: string; // Le ID de l'image (s'il y en a une) de la publication
    postID: string
}

const Post = ({title="No title", description, authorID, exposerID, imageID, postID}: PostProps) => { // Déclaration de composant avec ses paramètres

    const imageURL = usePostImage(imageID); // usePostImage est un hook qui prend en paramètre le ID de l'image et qui retourne son URL

    const [isImagePost, setIsImagePost] = useState(false); // Déclaration du l'état si la publication contient une image ou pas

    const comments = useComments(postID);

    useEffect(() => { // le hook useEffect effectue la fonction qu'on lui passe une seule fois si le dependency array est vide (le deuxieme argument du hook)
        if (title === "Pas de titre" && description === '') { // Verifier si la publication contient seulement une image, si oui on set isImagePost à true
            setIsImagePost(true); 
        }
    }, [])

    

    

    return (
        <PostNavigationButton postID={postID}>
            <View style={styles.container}>
        {
            imageURL ?  // Si il y a une imageURL on affiche ceci
            <>
                
                {
                    (exposerID && authorID) ? // Si nous connaissons qui est l'autheur et l'exposer on afficher ceci
                    <Author  // Le composant Author prend comme parametre le authorID et l'exposer ID, il affiche ensuite le widget qui permet de voir qui à créer la publication
                        authorID={authorID}
                        exposerID={exposerID}
                        style={{position: 'absolute', margin: 10, zIndex: 4}}
                    /> :
                    <></>
                }
                <LinearGradient // Le composant LinearGradient permet d'afficher un LinearGradient (on ne peut le faire autrement comme en Web avec du CSS)
                    colors={['rgba(255,255,255,0.6)', 'transparent']}
                    style={styles.gradient}
                />
                
                <LazyLoadingImage // Ce composant permet de charger les images de manière parralèle au restant de la page et affiche un 'skeleton' tant qu'elle n'est pas chargée
                    profilePictureUrl={imageURL}
                    borderWidth={0}
                    borderRadius={5}
                    shadowOffset={0}
                    width={'auto'}
                    height={275}
                />
            </>
            : // Si il n'y a pas de URL correspondant à l'imageID on affiche ceci
                (exposerID && authorID) ?
                    <Author 
                        authorID={authorID}
                        exposerID={exposerID}
                        style={{margin: 10}}
                    />
                :
                <></>
            
        }
        {
            (isImagePost) ? // Si la publication ne contient qu'une seule image (pas de titre ou de description)
            <></>  : //Nous n'afficons pas le titre ni la description
            <> 
                <Text style={styles.title}>{title}</Text>
                {
                    (description !== '') ?
                    <Text style={styles.description}>{description}</Text>
                    :
                    <></>
                }
            </>

        } 

        {/* Ici, on affiche les boutons d'interaction de la publication */}
        <View style={[styles.postBottom, isImagePost ? {position: 'absolute', right: 0, bottom: 0} : {}]}> 
            <PostInteractionButton  // Bouton pour partager la publication
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
            <PostNavigationButton postID={postID}>
                <PostInteractionButton  // Bouton pour commenter la publication
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
                    disabled={true}
                    counter={comments?.length}
                />
            </PostNavigationButton>
            
            <PostRatingButton // Bouton pour metter une upvote ou downvote (liker / disliker)
                color={Colors.light.yellow}
                postID={postID}
            />
        </View>
        </View>
        </PostNavigationButton>
        
    )
}



export default Post

const styles = StyleSheet.create({ // Les styles de la publication
    gradient: { // Styles du LinearGradient au-dessus de l'image pour aider la visibilité des autheurs de la publication
        left: 0,
        right: 0,
        top: 0,
        height: 150,
        position: 'absolute',
        zIndex: 2,
        borderRadius: 6
    },
    container: { // Style du container du la publication au complet
        borderColor: 'black',
        borderWidth: 2,
        marginHorizontal: 20,
        borderRadius: 8,
        position: 'relative',
        backgroundColor: 'white',
    },
    title: { // Style du titre de la publication
        marginTop: 10,
        marginHorizontal: 20,
        fontSize: 28,
        fontWeight: 'bold'
    },
    description: { // Style de la description de la publication
        fontSize: 14,
        marginHorizontal: 20,
        marginBottom: 10
    },
    postBottom: { // Style de la section pour interagir avec la publication (commentaires, partages et noter la publication)
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 10,
        zIndex: 4
    }
})