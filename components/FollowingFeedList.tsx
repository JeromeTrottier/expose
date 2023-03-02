import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Skeleton } from '@rneui/themed'
import { windowWidth } from '../utils/Dimensions'
import useSubscribtionFeedPosts from '../hooks/useSubscribtionFeedPosts'
import { UserContext } from '../contexts/userContext'
import Post from './Post'
import LoadingList from './LoadingList'

const FollowingFeedList = () => {

  const user = useContext(UserContext);

  const posts = useSubscribtionFeedPosts(user?.user.uid);

  return (
    <FlatList
      ListHeaderComponent={() => <View style={{marginTop: 20}}/>}
      ListFooterComponent={() => <View style={{marginTop: 20}}/>}
      data={posts}
      renderItem={({item}) => 
        <Post
          title={item.title}
          description={item.description}
          authorID={item.authorID}
          exposerID={item.exposerID}
          imageID={item.imageID}
          postID={item.postID}
        />
      }
      ListEmptyComponent={<><LoadingList/></>}
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
    />
  )
}

export default FollowingFeedList

const styles = StyleSheet.create({})