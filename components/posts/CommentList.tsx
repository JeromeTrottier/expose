import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Comment from './Comment'
import Colors from '../../constants/Colors'
import FormInput from '../form/FormInput'
import { Icon } from '@rneui/themed'
import IconButton from '../IconButton'
import useComments from '../../hooks/useComments'
import { postComment } from '../../models/post-model'
import { UserContext } from '../../contexts/userContext'

interface CommentListProps {
    postID: string
}

const CommentList = ({postID}: CommentListProps) => {

    const [comment, setComment] = useState<string>('');
    const [commentTrigger, setCommentTrigger] = useState<boolean>(false);

    const comments = useComments(postID, commentTrigger);

    const user = useContext(UserContext);

    const handlePostComment = async () => {
        await postComment(postID, {text: comment, authorID: user?.user.uid});
        setComment('');
        setCommentTrigger(!commentTrigger);
    }
    

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
                        onPress={handlePostComment}
                    />
                }            
                placeholder='Écrire un commentaire...'
                labelValue={comment}
                style={{height: 50, flexDirection: 'row-reverse', margin: 10, flex: 1}}
                onChangeText={(text) => setComment(text)}
            />
        </View>
        
        {
            (comments && comments.length > 0) ? 
            comments?.map((comment) => 
                <Comment
                    commenterID={comment.authorID}
                    commentText={comment.text}
                />
            )
            :
            <View style={styles.noCommentsView}>  
                <Text style={styles.noCommentsText}>Pas encore de commentaires</Text>
                <Icon 
                    name='sad-tear'
                    type='font-awesome-5'
                    solid={true}
                    size={100}
                />
            </View>
            
        }
    </View>
  )
}

export default CommentList

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // backgroundColor: Colors.light.pink
    },
    noCommentsView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    },
    noCommentsText: {
        fontSize: 20,
        margin: 10
    }

})