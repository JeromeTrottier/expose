import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import useSubscribtionFeedPosts from '../hooks/useSubscribtionFeedPosts'
import { UserContext } from '../contexts/userContext'
import Post from './Post'
import LoadingList from './LoadingList'
import useRefresh from '../hooks/useRefresh'

const FollowingFeedList = () => {

  const user = useContext(UserContext);

  const {refreshing, onRefresh} = useRefresh();

  const posts = useSubscribtionFeedPosts(refreshing, user?.user.uid);

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
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  )
}

export default FollowingFeedList

const styles = StyleSheet.create({})