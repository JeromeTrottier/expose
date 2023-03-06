import { GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import { UserContext } from '../../contexts/userContext';
import { downvotePost, undoDownvotePost, undoUpvotePost, upvotePost } from '../../models/post-model';
import usePostRatings from '../../hooks/usePostRatings';
import { hasUserAlreadyDownvotedPost, hasUserAlreadyUpvotedPost } from '../../models/user-model';
import Colors from '../../constants/Colors';

interface PostRatingButtonProps {
    color?: string;
    counterLike?: number;
    counterDislike?: number;
    postID: string;
}

const PostRatingButton = ({color, counterLike=0, counterDislike=0, postID}: PostRatingButtonProps) => {
    const user = useContext(UserContext);

    const [postRatingTrigger, setPostRatingTrigger] = useState<boolean>(false);

    const handleUpvote = async () => {

        const hasUserAlreadyUpvoted = await hasUserAlreadyUpvotedPost(user?.user.uid, postID);

        if (!hasUserAlreadyUpvoted) {
            const hasUserAlreadyDownvoted = await hasUserAlreadyDownvotedPost(user?.user.uid, postID);

            if (hasUserAlreadyDownvoted) {
                undoDownvotePost(user?.user.uid, postID);
            }
            await upvotePost(user?.user.uid, postID);
        } else {
            
            await undoUpvotePost(user?.user.uid, postID);
        }
        setPostRatingTrigger(!postRatingTrigger);
         
    }

    const handleDownvote = async () => {

        const hasUserAlreadyDownvoted = await hasUserAlreadyDownvotedPost(user?.user.uid, postID);

        if (!hasUserAlreadyDownvoted) {
            const hasUserAlreadyUpvoted = await hasUserAlreadyUpvotedPost(user?.user.uid, postID);

            if (hasUserAlreadyUpvoted) {
                
                await undoUpvotePost(user?.user.uid, postID);
            }
            
            await downvotePost(user?.user.uid, postID);
            
        } else {
            undoDownvotePost(user?.user.uid, postID);
        }
        setPostRatingTrigger(!postRatingTrigger);
    }

    const {postRatings, hasUserDownvoted, hasUserUpvoted} = usePostRatings(postID, postRatingTrigger, user?.user.uid,);

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
        { 
            hasUserUpvoted ? 
            <TouchableOpacity style={[styles.button, {backgroundColor: Colors.light.tint, borderTopLeftRadius: 25, borderBottomLeftRadius: 25}]} onPress={handleUpvote}>
                <Icon
                    name='arrow-up'
                    type='entypo'
                    color={Colors.light.background}
                />
                <Text style={[styles.textCounter, {color: Colors.light.background}]}>{postRatings?.upvotes}</Text> 
            </TouchableOpacity>
        :
            <TouchableOpacity style={styles.button} onPress={handleUpvote}>
                <Icon
                    name='arrow-up'
                    type='entypo'
                />
                <Text style={styles.textCounter}>{postRatings?.upvotes}</Text> 
            </TouchableOpacity>
        }
        
        <View style={styles.separator}></View>
        {
            hasUserDownvoted ? 
            <TouchableOpacity style={[styles.button, {backgroundColor: Colors.light.tint, borderTopRightRadius: 25, borderBottomRightRadius: 25}]} onPress={handleDownvote}>
                <Icon
                    name='arrow-down'
                    type='entypo'
                    color={Colors.light.background}
                />
                <Text style={[styles.textCounter, {color: Colors.light.background}]}>{postRatings?.downvotes}</Text>
            </TouchableOpacity>
        : 
            <TouchableOpacity style={styles.button} onPress={handleDownvote}>
                <Icon
                    name='arrow-down'
                    type='entypo'
                />
                <Text style={styles.textCounter}>{postRatings?.downvotes}</Text>
            </TouchableOpacity>
        }
       
    </View>
  )
}

export default PostRatingButton

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 1,
        shadowRadius: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    counter: {
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    separator: {
        height: '100%',
        width: 2,
        backgroundColor: 'black'
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

    },
    textCounter: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})