import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Author from './Author';

interface CommentProps {
    commenterID: string;
    commentText: string;
}

const Comment = ({commenterID, commentText}: CommentProps) => {
  return (
    <View style={styles.container}>
      <Author
        authorID={commenterID}
        isCommentAuthor={true}
      />  
      <Text style={styles.text}>{commentText}</Text>
    </View>
  )
}

export default Comment

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginVertical: 5,
        borderTopWidth: 2,
        borderRadius: 20
    },
    text: {
        marginVertical: 5
    }
})