import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import usePosts from '../hooks/usePosts';
import Post from './Post';

type HomePostsListProps = {
    headerComponent?: React.ReactNode;
}


const HomePostsList = ({headerComponent}: HomePostsListProps) => {

    const posts = usePosts();

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
                        // imageURL={item.imageID}
                    />
                }
                ListEmptyComponent={<><EmptyDataComponent/></>}
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