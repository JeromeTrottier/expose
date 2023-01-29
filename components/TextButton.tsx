import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimensions'
import React from 'react'

type TextButtonProps = {
    title: string,
    color?: string,
}

const TextButton = ({color="blue", title, ...rest}: TextButtonProps & TouchableOpacityProps) => {

  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <Text style={[styles.text, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TextButton

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: windowHeight / 40,
    },
    text: {
        fontSize: 17
    }
})