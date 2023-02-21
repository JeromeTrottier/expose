import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Post from './Post'
import useExposes from '../hooks/useExposes'

interface ExposesListProps {
    userID: string
    headerComponent: React.ReactNode;
}

const ExposesList = ({userID, headerComponent}: ExposesListProps ) => {
    const exposes = useExposes(userID);

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
                    // imageURL={item.imageID}
                />
            }
            ListEmptyComponent={<><EmptyDataComponent/></>}
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