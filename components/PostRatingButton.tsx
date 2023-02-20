import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';

type PostRatingButtonProps = {
    color?: string;
    counterLike?: number;
    counterDislike?: number;
}

const PostRatingButton = ({color, counterLike=0, counterDislike=0}: PostRatingButtonProps) => {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
        <TouchableOpacity style={styles.button}>
            <Icon
                name='arrow-up'
                type='entypo'
            />
            <Text style={styles.textCounter}>{counterLike}</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity style={styles.button}>
            <Icon
                name='arrow-down'
                type='entypo'
            />
            <Text style={styles.textCounter}>{counterDislike}</Text>
        </TouchableOpacity>
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