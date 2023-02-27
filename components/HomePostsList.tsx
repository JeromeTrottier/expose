import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import usePosts from '../hooks/usePosts';
import Post from './Post';
import useRefresh from '../hooks/useRefresh';
import useNewPosts from '../hooks/useNewPosts';
import { DBExposePost } from '../types';

type HomePostsListProps = {
    headerComponent?: React.ReactNode;
}


const HomePostsList = ({headerComponent}: HomePostsListProps) => {

    const [posts, setPosts] = useState<Array<DBExposePost>>([]);
    const [loadNewPosts, setLoadNewPosts] = useState<boolean>(false);

    const {refreshing, onRefresh} = useRefresh();

    const {initialPosts, lastPostKey} = usePosts(refreshing);
    const newPosts = useNewPosts(loadNewPosts);

    useEffect(() => {
        setPosts(initialPosts);
    }, [initialPosts]);

    useEffect(() => {
        setPosts([...posts, ...newPosts]);
    }, [newPosts]);
    

    const handleEndReached = (info: any) => {
        console.log("end reached");
        
        setLoadNewPosts(true);
        setTimeout(() => {
            setLoadNewPosts(false);
        }, 2000);
    }

    return (
        <FlatList
            ListHeaderComponent={<>{headerComponent? headerComponent : <></>}</>}
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
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ItemSeparatorComponent={() => <View style={{height: 10}} />}
            onEndReached={(info) =>handleEndReached(info)}
        />
    )
}

const EmptyDataComponent = () => {
    return (
        <Text>Pas encore de posts...</Text>
    )
}

export default HomePostsList

const styles = StyleSheet.create({})