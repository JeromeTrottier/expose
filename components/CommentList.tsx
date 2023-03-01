import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Comment from './Comment'
import Colors from '../constants/Colors'
import FormInput from './form/FormInput'
import { Icon } from '@rneui/themed'
import IconButton from './IconButton'

interface CommentListProps {
    postID: string
}

const CommentList = ({postID}: CommentListProps) => {

    const [comment, setComment] = useState<string>('');

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 20, marginHorizontal: 20, marginVertical: 10, fontStyle: 'italic'}}>Commentaires</Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <FormInput
                iconComponent={
                    <IconButton
                        iconComponent={
                            <Icon
                                name='send'
                            />
                        }
                    />
                }            
                placeholder='Écrire un commentaire...'
                labelValue={comment}
                style={{height: 50, flexDirection: 'row-reverse', margin: 10, flex: 1}}
                onChangeText={(text) => setComment(text)}
            />
        </View>
        
        {
            [1, 2, 3, 4, 5].map((comment) => 
                <Comment
                    commenterID='j7fqf34edOZGlMizcCeSEnLZsRw2'
                    commentText={comment.toString()}
                />
            )
        }
    </View>
  )
}

export default CommentList

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // backgroundColor: Colors.light.pink
    }

})