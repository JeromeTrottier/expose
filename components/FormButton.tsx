import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimensions'

type FormButtonProps = {
    title: string;
    color?: string;
}

const FormButton = ({title, color='blue', ...rest}: FormButtonProps & TouchableOpacityProps) => {
  return (
      <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: color}]} {...rest}>
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
        height: windowHeight / 15,
        borderRadius: 50
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    }
})