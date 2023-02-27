import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../../utils/Dimensions'

type FormButtonProps = {
    title: string;
    color?: string;
    style?: ViewStyle;
}

const FormButton = ({title, color='blue', style, ...rest}: FormButtonProps & TouchableOpacityProps) => {
  return (
      <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: color}, style]} {...rest}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
  )
}

export default FormButton

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        padding: 10,
        width: windowWidth - 100,
        height: windowHeight / 11,
        borderColor: 'black',
        borderWidth: 2,
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    }
})