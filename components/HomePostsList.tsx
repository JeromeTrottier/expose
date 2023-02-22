import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import usePosts from '../hooks/usePosts';
import Post from './Post';
import useRefresh from '../hooks/useRefresh';

type HomePostsListProps = {
    headerComponent?: React.ReactNode;
}


const HomePostsList = ({headerComponent}: HomePostsListProps) => {

    const {refreshing, onRefresh} = useRefresh();

    const posts = usePosts(refreshing);

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