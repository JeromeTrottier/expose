import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { PostScreenProps } from '../types'
import usePost from '../hooks/usePost';
import LazyLoadingImage from '../components/LazyLoadingImage';
import usePostImage from '../hooks/usePostImage';
import { windowWidth } from '../utils/Dimensions';
import PostInteractionButton from '../components/posts/PostInteractionButton';
import PostRatingButton from '../components/posts/PostRatingButton';
import { Icon } from '@rneui/base';
import Colors from '../constants/Colors';
import Author from '../components/posts/Author';
import CommentList from '../components/posts/CommentList';
import useComments from '../hooks/useComments';

const PostScreen = ({route, navigation}: PostScreenProps) => {

  const postData = usePost(route.params.postID);

  const postImageURL = usePostImage(postData?.imageID);

  const comments = useComments(route.params.postID);
  

  if (postData) {
    return (
      <ScrollView>
        {
          postImageURL ? 
          <LazyLoadingImage
            profilePictureUrl={postImageURL}
            width={windowWidth}
            height={300}
            borderRadius={0}
          /> :
          <></>
        }
        <Author
          style={{marginHorizontal: 20, marginTop: 10}}
          authorID={postData.authorID}
          exposerID={postData.exposerID}
        />
        
        { postData?.title === "Pas de titre" ? <></> : <Text style={styles.title}>{postData?.title}</Text>}
        { postData?.description === "" ? <></> : <Text style={styles.description}>{postData?.description}</Text>}
        <View style={styles.postInteractionView}>
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
              counter={comments?.length}
          />
          <PostRatingButton // Bouton pour metter une upvote ou downvote (liker / disliker)
              color={Colors.light.yellow}
              postID={route.params.postID}
          />
        </View>
        <CommentList
          postID={route.params.postID}
        />
      </ScrollView>
    )
  }
  
}

export default PostScreen

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    marginHorizontal: 20,
    fontSize: 28,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 15,
    marginHorizontal: 20,
    marginBottom: 10
  },
  postInteractionView: { // Style de la section pour interagir avec la publication (commentaires, partages et noter la publication)
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 4
}
})