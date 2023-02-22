import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import Post from './Post'
import useExposes from '../hooks/useExposes'
import useRefresh from '../hooks/useRefresh'

interface ExposesListProps {
    userID: string
    headerComponent: React.ReactNode;
}

const ExposesList = ({userID, headerComponent}: ExposesListProps ) => {

    const {refreshing, onRefresh} = useRefresh();

    const exposes = useExposes(userID, refreshing);

    return (
        <FlatList
            ListHeaderComponent={<>{headerComponent}</>}
            data={exposes}
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
            ItemSeparatorComponent={() => <View style={{height: 10}}/>}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        />
    )
}

const EmptyDataComponent = () => {
    return (
        <View style={styles.emptyDataMessageContainer}>
            <Text style={styles.emptyDataMessageText}>Pas d'Exposes pour le moment...</Text>
        </View>
        
    )
}

export default ExposesList

const styles = StyleSheet.create({
    emptyDataMessageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 100
    },
    emptyDataMessageText: {
        fontSize: 20,
        fontWeight: '600',

    }
})