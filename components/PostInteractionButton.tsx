import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

type PostInteractionButtonProps = {
    iconComponent: React.ReactNode;
    color?: string;
    counter?: number;
    hasCounter?: boolean;
}

const PostInteractionButton = ({iconComponent, color="white", counter=0, hasCounter=false}: PostInteractionButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: color}]}>
      {iconComponent}
      {hasCounter && <Text style={styles.counter}>{counter}</Text>}
    </TouchableOpacity>
  )
}

export default PostInteractionButton

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 5,
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
        flexDirection: 'row',
        marginRight: 10
    },
    counter: {
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 'bold'
    }
})