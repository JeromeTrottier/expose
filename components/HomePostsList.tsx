import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import usePosts from '../hooks/usePosts';
import Post from './posts/Post';
import useRefresh from '../hooks/useRefresh';
import LoadingList from './LoadingList';
import TextButton from './form/TextButton';
import Colors from '../constants/Colors';

type HomePostsListProps = {
    headerComponent?: React.ReactNode;
}


const HomePostsList = ({headerComponent}: HomePostsListProps) => {
    const [loadNewPosts, setLoadNewPosts] = useState<boolean>(false);
    const {refreshing, onRefresh} = useRefresh();
    const posts = usePosts(refreshing, loadNewPosts);


    const handleViewMorePosts = () => {       
        setLoadNewPosts(!loadNewPosts);
    }

    return (
        <FlatList
            ListHeaderComponent={<>{headerComponent? headerComponent : <></>}</>}
            ListFooterComponent={<TextButton title='Voir plus...' onPress={handleViewMorePosts} color={Colors.light.tint} />}
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
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ItemSeparatorComponent={() => <View style={{height: 10}} />}
        />
    )
}

export default HomePostsList

const styles = StyleSheet.create({})