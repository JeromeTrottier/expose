import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Skeleton } from '@rneui/themed'
import { windowWidth } from '../utils/Dimensions'
import useSubscribtionFeedPosts from '../hooks/useSubscribtionFeedPosts'
import { UserContext } from '../contexts/userContext'
import Post from './Post'

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
        />
      }
      ListEmptyComponent={<><EmptyDataComponent/></>}
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
    />
  )
}

const EmptyDataComponent = () => {
  return (
    <View>
      {[1, 2, 3].map((item) => <Skeleton key={item} style={{marginHorizontal: 20, marginVertical: 10, borderRadius: 10}} width={windowWidth - 40} height={275}/>)}
    </View>
    
  )
}

export default FollowingFeedList

const styles = StyleSheet.create({})